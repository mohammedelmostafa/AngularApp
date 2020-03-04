import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HeroService} from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
// call interface and assigned value
  hero: Hero ={
    id:1,
    name:"Windstorm"
  };

  heroes:Hero[];

  selectedhero: Hero;
  
  onSelect(hero:Hero): void {
   this.selectedhero=hero;
  }
  
  constructor(private heroservice:HeroService) { 
    
  }
  getHeroes(): void{
    this.heroservice.getHeroes().subscribe(heroes=>this.heroes=heroes)
  }
  ngOnInit(): void {
    this.getHeroes();
  }

}
