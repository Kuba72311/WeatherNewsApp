import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimezonePageRoutingModule } from './timezone-routing.module';

import { TimezonePage } from './timezone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimezonePageRoutingModule
  ],
  declarations: [TimezonePage]
})
export class TimezonePageModule {}
