import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import { food } from '../food/food';
import { IFood } from '../food/IFood';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private cs:ServiceService) { }
  dish:IFood={} as IFood
  id:number=0

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id= +params["id"]
      this.dish= food[this.id]
    }
    )
  }

  addToCart(dish:IFood){
    alert("you add this dish to the cart")
    this.cs.addToCart(dish)
    
    
  }

}
