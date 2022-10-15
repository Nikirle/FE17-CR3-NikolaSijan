import { Injectable } from '@angular/core';
import { IFood } from './food/IFood';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  items:Array<IFood> = [] 

  constructor() { }

  addToCart(dish:IFood){
    this.items.push(dish)
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
     total += item.price
    }
    return total
    }

    service(){
      let total:number= 0
      let service:number=0
    for(let item of this.items){
     total += item.price
     service= total*0.1
    }
    return service
    }
    

    getDiscount(){
      let discount:number = 0 
      let total:number=0
      for(let item of this.items){
        total += item.price
        if(total>40){
          discount=total*0.15
          }
      }
      return discount
    }

    
    

  }

