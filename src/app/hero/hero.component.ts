import { HeroServiceService } from './../hero-service.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';

import { Router } from '@angular/router';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [],
})
export class HeroComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().then( heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeroes();
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter( h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

  constructor(private heroService: HeroServiceService, private router: Router) { }
}
