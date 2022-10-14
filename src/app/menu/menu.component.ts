import { Component, OnInit } from '@angular/core';
import { food } from '../food/food';
import { IFood } from '../food/IFood';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  food: Array<IFood> = food


  constructor() { }

  ngOnInit(): void {
  }

}
