import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherLocationPageRoutingModule } from './weather-location-routing.module';

import { WeatherLocationPage } from './weather-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherLocationPageRoutingModule
  ],
  declarations: [WeatherLocationPage]
})
export class WeatherLocationPageModule {}
