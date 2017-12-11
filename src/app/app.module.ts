import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { SearchBoxDirective } from './search-box.directive';
import { SalesDataService } from './sales-data.service';
import { SalesData2Service } from './sales-data2.service';
import { InitCapsPipe } from './shared/init-caps.pipe';
import {LoginModule} from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrdersComponent,
    SearchBoxDirective,
    InitCapsPipe
  ],
  imports: [
    BrowserModule,
    LoginModule
  ],
  providers: [SalesDataService, SalesData2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
