import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import { food } from '../food/food';
import { IFood } from '../food/IFood';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  dish:IFood={} as IFood
  id:number=0

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id= +params["id"]
      this.dish= food[this.id]
    }
    )
  }

}
