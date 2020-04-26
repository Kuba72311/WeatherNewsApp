import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'weather-location',
    loadChildren: () => import('./weather-location/weather-location.module').then( m => m.WeatherLocationPageModule)
  },
  {
    path: 'extra-weather',
    loadChildren: () => import('./extra-weather/extra-weather.module').then( m => m.ExtraWeatherPageModule)
  },
  {
    path: 'timezone',
    loadChildren: () => import('./timezone/timezone.module').then( m => m.TimezonePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
