import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  buttonName:any = 'Ormsby HypeGTR';
  show:boolean = false;
  buttonNameAgile:any = 'Agile Interceptor';
  showAgile:boolean = false;
  buttonNameJackson:any = 'Jackson Rhoads V';
  showJackson:boolean = false;
  buttonNameEsp:any = 'ESP B-105 (5 string)';
  showEsp:boolean = false;
  constructor(private service: PortfolioService) { }

  ngOnInit(): void {
  }

   toggle() {
    this.show = !this.show;
    if(this.show) {
      this.buttonName = "Hide"
    } else { 
      this.buttonName = "Ormsby HypeGTR"
    }
  }

  toggleAgile() {
    this.showAgile = !this.showAgile;
    if(this.showAgile) {
      this.buttonNameAgile = "Hide"
    } else { 
      this.buttonNameAgile = "Agile Interceptor"
    }
  }

  toggleJackson() {
    this.showJackson = !this.showJackson;
    if(this.showJackson) {
      this.buttonNameJackson = "Hide"
    } else { 
      this.buttonNameJackson = "Jackson Rhoads V"
    }
  }

  toggleEsp() {
    this.showEsp = !this.showEsp;
    if(this.showEsp) {
      this.buttonNameEsp = "Hide"
    } else { 
      this.buttonNameEsp = "ESP B-105 (5 string)"
    }
  }
}
