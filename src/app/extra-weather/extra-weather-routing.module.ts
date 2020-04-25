import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtraWeatherPage } from './extra-weather.page';

const routes: Routes = [
  {
    path: '',
    component: ExtraWeatherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraWeatherPageRoutingModule {}
