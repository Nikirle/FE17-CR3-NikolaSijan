import { Component, OnInit } from '@angular/core';
import { IFood } from '../food/IFood';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:Array<IFood>=[]
  totalprice=0
  discount=0

  constructor(private cs:ServiceService) { }

  ngOnInit(): void {

    this.items=this.cs.showItem()
    this.totalprice=this.cs.totalAmount()
    this.discount=this.cs.getDiscount()
  }

  clearCart(){
    this.items=this.cs.clearCart()
    this.totalprice=this.cs.totalAmount()
    this.discount=this.cs.getDiscount()

   
  }

}
