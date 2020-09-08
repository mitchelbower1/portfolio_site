import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component"
import {MusicComponent} from "./music/music.component"
import { BikesAndCarsComponent } from './bikes-and-cars/bikes-and-cars.component';
import {NavigationComponent} from "./navigation/navigation.component";

const routes: Routes = [{path: "", redirectTo:"/main", pathMatch:"full"},
{path: "main", component: MainComponent},
{path: "music", component: MusicComponent},
{path: "bikes-and-cars", component: BikesAndCarsComponent},
{path: "navigation", component: NavigationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
