import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  buttonName:any = 'show more';
  show:boolean = false;
  buttonNameAgile:any = 'show more';
  showAgile:boolean = false;
  buttonNameJackson:any = 'show more';
  showJackson:boolean = false;
  constructor(private service: PortfolioService) { }

  ngOnInit(): void {
  }

   toggle() {
    this.show = !this.show;
    if(this.show) {
      this.buttonName = "Hide"
    } else { 
      this.buttonName = "Show More"
    }
  }

  toggleAgile() {
    this.showAgile = !this.showAgile;
    if(this.showAgile) {
      this.buttonNameAgile = "Hide"
    } else { 
      this.buttonNameAgile = "Show More"
    }
  }

  toggleJackson() {
    this.showJackson = !this.showJackson;
    if(this.showJackson) {
      this.buttonNameJackson = "Hide"
    } else { 
      this.buttonNameJackson = "Show More"
    }
  }
}
