import { Component, OnInit } from '@angular/core';
 import { Hero } from '../hero';
import {HEROES} from '../mok-heroes';

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

  heroes=HEROES;

  selectedhero: Hero;
  
  onSelect(hero:Hero): void {
   this.selectedhero=hero;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
