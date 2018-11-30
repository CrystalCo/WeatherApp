import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { ForecastsComponent } from './forecasts/forecasts.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ForecastsComponent,
    CityDetailComponent,
    MessagesComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
