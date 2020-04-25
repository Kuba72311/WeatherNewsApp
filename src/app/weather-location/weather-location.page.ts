import { Component, OnInit } from '@angular/core';
import {WeatherByLocationService} from '../Service/weather-by-location.service';
import { Capability } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-location',
  templateUrl: './weather-location.page.html',
  styleUrls: ['./weather-location.page.scss'],
})
export class WeatherLocationPage implements OnInit {
Weather:any=[];
Current:any=[];
  constructor(private weatherByLocationService:WeatherByLocationService,public router: Router) { }

    //receive data from the api on startup and assign it to arrays
  ngOnInit(){
    this.weatherByLocationService.GetWeather().subscribe(
      (data)=>{
        this.Weather = data.location;
        this.Current = data.current;
      }
    );
     
  }

  goHome(){
    this.router.navigateByUrl('/home');
  }

  goExtra(){
    this.router.navigateByUrl('/extra-weather');
  }



}
