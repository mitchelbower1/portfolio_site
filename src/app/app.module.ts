import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MusicComponent } from './music/music.component';
import { BikesAndCarsComponent } from './bikes-and-cars/bikes-and-cars.component';
import { NavigationComponent } from './navigation/navigation.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { YtPlayerAngularModule } from 'yt-player-angular';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MusicComponent,
    BikesAndCarsComponent,
    NavigationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    YtPlayerAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
