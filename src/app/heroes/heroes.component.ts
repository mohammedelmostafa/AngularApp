import { Component, OnInit } from '@angular/core';
import { hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
// call interface and assigned value
  hero: hero ={
    id:1,
    name:"Windstorm"
  };
  constructor() { }

  ngOnInit(): void {
  }
}
