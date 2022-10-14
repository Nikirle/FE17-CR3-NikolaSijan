import { Component, OnInit } from '@angular/core';
import { food } from '../food/food';
import { IFood } from '../food/IFood';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  food: Array<IFood> = food


  constructor(private cs: ServiceService) { }

  ngOnInit(): void {
  }


  addToCart(dish:IFood){
    alert("you add this dish to the cart")
    this.cs.addToCart(dish)
    
    
  }

}
