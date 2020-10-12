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
  buttonNameJackson:any = 'Jackson';
  showJackson:boolean = false;
  buttonNameEsp:any = 'ESP B-105';
  showEsp:boolean = false;
  buttonNameEspFretless:any = 'ESP B-205SM (fretless)';
  showEspFretless:boolean = false;
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
      this.buttonNameJackson = "Jackson"
    }
  }

  toggleEsp() {
    this.showEsp = !this.showEsp;
    if(this.showEsp) {
      this.buttonNameEsp = "Hide"
    } else { 
      this.buttonNameEsp = "ESP B-105"
    }
  }

  toggleEspFretless() {
    this.showEspFretless = !this.showEspFretless;
    if(this.showEspFretless) {
      this.buttonNameEspFretless = "Hide"
    } else { 
      this.buttonNameEspFretless = "ESP B-205SM (Fretless)"
    }
  }
}
