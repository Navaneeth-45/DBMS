import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DisplayComponent } from './display/display.component';
import { EarpodsdisplayComponent } from './earpodsdisplay/earpodsdisplay.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { HomeComponent } from './home/home.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { LaptopsdisplayComponent } from './laptopsdisplay/laptopsdisplay.component';

import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { MobilesdetailsComponent } from './mobilesdetails/mobilesdetails.component';
import { MobilesdisplayComponent } from './mobilesdisplay/mobilesdisplay.component';
import { WatchesComponent } from './watches/watches.component';
import { WatchesdisplayComponent } from './watchesdisplay/watchesdisplay.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent
},
  {path:'home',component:HomeComponent},
  {path:'mobiles',component:MobilesComponent},
{path:'mobilesdetails',component:MobilesdetailsComponent},
{path:'laptops',component:LaptopsComponent},
{path:'watches',component:WatchesComponent},
{path:'watches/:id',component:WatchesdisplayComponent},
{path:'headphones',component:HeadphonesComponent},
{path:'headphones/:id',component:EarpodsdisplayComponent},
{path:'laptops/:id',component:LaptopsdisplayComponent},
{path:'mobiles/:id',component:MobilesdisplayComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
