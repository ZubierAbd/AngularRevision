import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'
import { MessagesService } from '../messages.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessagesService) { }
  heroes: Hero[];
  hero: Hero = {
    id: 1,
    name: 'WindStorm'
  }



  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
