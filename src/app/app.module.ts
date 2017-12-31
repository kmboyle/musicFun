import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { SearchBoxDirective } from './search-box.directive';
import { SalesDataService } from './sales-data.service';
import { SalesData2Service } from './sales-data2.service';
import { InitCapsPipe } from './shared/init-caps.pipe';

import { RouterModule } from '@angular/router';
import { MusicComponent } from './music/music.component';
import {HttpClientModule} from '@angular/common/http';
import { MusicService } from './music/music.service';
import {HttpModule} from '@angular/http';
import { MusicPerformanceComponent } from './music/music-performance.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "home", component: MusicComponent },
      {path: "music/:id", component: MusicPerformanceComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
      
    ])
  ],
  declarations: [
    AppComponent,
    InitCapsPipe,
    MusicComponent,
    MusicPerformanceComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
