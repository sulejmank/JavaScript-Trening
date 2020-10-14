import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heros: Hero[];
  constructor(
    private heroService: HeroService,
    private messageService: MessagesService) { }

  ngOnInit(): void {
   this.getHeros();
  }

  onSelect(hero: Hero): void {
    this.messageService.add(`Selected hero is : Name : ${hero.name}, id: ${hero.id}`);
  }

  getHeros(): void {
    this.heroService.getHeroes()
    .subscribe((heroji) => {
      this.heros = heroji;
    });
  }
}
