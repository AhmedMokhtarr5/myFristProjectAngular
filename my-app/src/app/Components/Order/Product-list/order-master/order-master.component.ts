import { Component } from '@angular/core';

import { NgFor, NgIf } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../../../Models/icategory';
import { ProductListComponent } from "../product-list.component";


@Component({
  selector: 'app-order-master',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, CommonModule, ProductListComponent],
  templateUrl: './order-master.component.html',
  styleUrl: './order-master.component.css'
})
export class OrderMasterComponent {
  catlist:Icategory[];
  selectedcatID:number=0;
  OrderTotalPrice:number=0;
  constructor(){

    this.catlist=[
      { id:1,name:'laptop'},
      { id:2,name:'Mobile'},
      { id:3,name:'Tablets'},
      

  ]
  }

}
