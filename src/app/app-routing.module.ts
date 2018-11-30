import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastsComponent } from './forecasts/forecasts.component';

const routes: Routes = [
  { path: 'forecasts', component: ForecastsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}