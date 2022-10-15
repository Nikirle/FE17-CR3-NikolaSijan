import { Injectable } from '@angular/core';
import { IFood } from './food/IFood';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  items:Array<IFood> = [] 

  constructor() { }

  addToCart(dish:IFood){
    // this.items.push(dish)
    if (this.items.find((val) => val.name == dish.name)) {
      
      dish.qtty++;
    } else {
      this.items.push(dish);
    }
  }

  showItem(){
    return this.items
  }

  clearCart(){
    this.items=[]
    return this.items
  }
  
  totalAmount(){
    let total:number= 0
    for(let item of this.items){
     total += item.price*item.qtty
    }
    return total
    }

    service(){
      let total:number= 0
      let service:number=0
    for(let item of this.items){
     total += item.price*item.qtty
     service= total*0.1
    }
    return service
    }
    

    getDiscount(){
      let discount:number = 0 
      let total:number=0
      for(let item of this.items){
        total += item.price*item.qtty
        if(total>40){
          discount=total*0.15
          }
      }
      return discount
    }

    
    

  }

