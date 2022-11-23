import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { ClockComponent } from './clock/clock.component';
import { WeatherComponent } from './weather/weather.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'comp1',component:Component1Component},
  {path:'comp2',component:Component2Component},
  {path:'comp3',component:Component3Component},
  {path:'comp4',component:ClockComponent},
  {path:'comp5',component:WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
