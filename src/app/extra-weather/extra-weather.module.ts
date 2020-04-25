import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtraWeatherPageRoutingModule } from './extra-weather-routing.module';

import { ExtraWeatherPage } from './extra-weather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExtraWeatherPageRoutingModule
  ],
  declarations: [ExtraWeatherPage]
})
export class ExtraWeatherPageModule {}
