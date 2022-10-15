import { Component, OnInit } from '@angular/core';
import { IFood } from '../food/IFood';
import { ServiceService } from '../service.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:Array<IFood>=[]
  totalprice=0
  discount=0
  service=0
  constructor(private cs:ServiceService) { }

  ngOnInit(): void {

    this.items=this.cs.showItem()
    this.totalprice=this.cs.totalAmount()
    this.discount=this.cs.getDiscount()
    this.service=this.cs.service()
  }

  clearCart(){
    this.items=this.cs.clearCart()
    this.totalprice=this.cs.totalAmount()
    this.discount=this.cs.getDiscount()
    this.service=this.cs.service()
  }


  orderForm = new FormGroup(
    {
      name: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required)
    }
  )

  onSubmit(){
    if(this.orderForm.valid){
      let val: any = this.orderForm.value;
      this.items=this.cs.clearCart()
      this.totalprice=this.cs.totalAmount()
    this.discount=this.cs.getDiscount()
    this.service=this.cs.service()
    }
  }

}
