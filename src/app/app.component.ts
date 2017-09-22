import { HeroServiceService } from './hero-service.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroServiceService],
})
export class AppComponent implements OnInit {
  title: string = 'Tour Of Heroes';
  
  ngOnInit() {
  }
  constructor() { }
}
