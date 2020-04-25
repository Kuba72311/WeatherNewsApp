import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherLocationPage } from './weather-location.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherLocationPageRoutingModule {}
