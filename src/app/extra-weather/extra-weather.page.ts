import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {WeatherByLocationService} from '../Service/weather-by-location.service';

@Component({
  selector: 'app-extra-weather',
  templateUrl: './extra-weather.page.html',
  styleUrls: ['./extra-weather.page.scss'],
})
export class ExtraWeatherPage implements OnInit {
  Current:any=[];
  constructor(public router:Router,private weatherByLocationService:WeatherByLocationService) { 
    
  }
  //receive data from the api on startup and assign to an array called current
  ngOnInit(){
    this.weatherByLocationService.GetWeather().subscribe(
      (data)=>{
        this.Current = data.current;
      }
    );
     
  }

  goHome(){
    this.router.navigateByUrl('/home');
  }

  goBack(){
    this.router.navigateByUrl('/weather-location')
  }

}
