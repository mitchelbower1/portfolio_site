import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component"
import {MusicComponent} from "./music/music.component"

const routes: Routes = [{path: "", redirectTo:"/main", pathMatch:"full"},
{path: "main", component: MainComponent},
{path: "music", component: MusicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
