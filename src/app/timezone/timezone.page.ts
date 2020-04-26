import { Component, OnInit } from '@angular/core';
import {WeatherByLocationService} from '../Service/weather-by-location.service';
import { Capability } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.page.html',
  styleUrls: ['./timezone.page.scss'],
})
export class TimezonePage implements OnInit {
  Weather:any=[];
  Current:any=[];
  constructor(private weatherByLocationService:WeatherByLocationService,public router: Router) { }

  ngOnInit(){
    //the page shows the time for the default location on startup which is galway
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

  //if the user enters a location it passes the string into the method and shows desired time
  getCity(city){
    this.weatherByLocationService.getWeatherDataByCity(city).subscribe(
      (data)=>{
        this.Weather = data.location;
        this.Current = data.current;
      }
    );
    //this.weatherByLocationService.GetWeather
  }
}
