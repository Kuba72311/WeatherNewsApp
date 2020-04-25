import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {

  }
  goToNews(){
    this.router.navigateByUrl('/news');
  }
  goToWeatherLocation(){
    this.router.navigateByUrl('/weather-location');
  }
}
