import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimezonePage } from './timezone.page';

const routes: Routes = [
  {
    path: '',
    component: TimezonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimezonePageRoutingModule {}
