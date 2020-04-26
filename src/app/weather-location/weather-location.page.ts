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
lat;
  lon;
  constructor(private weatherByLocationService:WeatherByLocationService,public router: Router) { }

    //the page shows the weather for the default location on startup which is galway
  ngOnInit(){
    // this.weatherByLocationService.GetWeather().subscribe(
    //   (data)=>{
    //     this.Weather = data.location;
    //     this.Current = data.current;
    //   }
    //  );
    this.getLocation();
 
  }

  goHome(){
    this.router.navigateByUrl('/home');
  }

  getLocation(){
    //using navigator to get device location to use in getweatherdatabycord method
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherByLocationService.getWeatherDataByCord(this.lat, this.lon).subscribe(data=>{
          this.Weather = data.location;
          this.Current = data.current;
        });

      })
    }
  }

  //if the user enters a location it passes the string into the method and shows desired weather
  getCity(city){
    this.weatherByLocationService.getWeatherDataByCity(city).subscribe(
      (data)=>{
        this.Weather = data.location;
        this.Current = data.current;
      }
    );
    //this.weatherByLocationService.GetWeather
  }

  goExtra(){
    this.router.navigateByUrl('/extra-weather');
  }



}
