import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { MobilesdetailsComponent } from './mobilesdetails/mobilesdetails.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { LaptopsdetailsComponent } from './laptopsdetails/laptopsdetails.component';
import { WatchesComponent } from './watches/watches.component';
import { WatchesdetailsComponent } from './watchesdetails/watchesdetails.component';
import { SearchPipe } from './search.pipe';
import { HeadphonesComponent } from './headphones/headphones.component';
import { HeadphonesdetailsComponent } from './headphonesdetails/headphonesdetails.component';
import { WatchesdisplayComponent } from './watchesdisplay/watchesdisplay.component';
import { EarpodsdisplayComponent } from './earpodsdisplay/earpodsdisplay.component';
import { LaptopsdisplayComponent } from './laptopsdisplay/laptopsdisplay.component';
import { MobilesdisplayComponent } from './mobilesdisplay/mobilesdisplay.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DisplayComponent,
    MobilesComponent,
    MobilesdetailsComponent,
    LaptopsComponent,
    LaptopsdetailsComponent,
    WatchesComponent,
    WatchesdetailsComponent,
    SearchPipe,
    HeadphonesComponent,
    HeadphonesdetailsComponent,
    WatchesdisplayComponent,
    EarpodsdisplayComponent,
    LaptopsdisplayComponent,
    MobilesdisplayComponent,
    CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
