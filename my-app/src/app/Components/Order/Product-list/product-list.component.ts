import { Component } from '@angular/core';
import { Iproduct } from '../../../Models/iproduct';
import { NgFor, NgIf } from '@angular/common';
import { Icategory } from '../../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { USDtoEGPPipe } from '../../../Pipes/usdto-egp.pipe'; 


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, NgIf,FormsModule,CommonModule,USDtoEGPPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent { 
  orderDate:Date;

    prdList:Iproduct[];
    prdListOfcat:Iproduct[]=[];
    selectedcatID:number=0;
    orderTotalPrice:number=0;
    constructor(){


      this.prdList=[

        {id:100, Name:"samsung a55",price:100,quantity:1,imgURL:'https://fakeimg.pl/250x100/',categoryID:2},
        {id:200, Name:"Apple iphone",price:200,quantity:3,imgURL:'https://fakeimg.pl/250x100/',categoryID:2},
        {id:300, Name:"lenovo ideapad",price:300,quantity:12,imgURL:'https://fakeimg.pl/250x100/',categoryID:3},
        {id:400, Name:"asus tuf ",price:400,quantity:14,imgURL:'https://fakeimg.pl/250x100/',categoryID:1},
        {id:500, Name:"lenovo",price:100,quantity:1,imgURL:'https://fakeimg.pl/250x100/',categoryID:1},
        {id:600, Name:"dell",price:600,quantity:0,imgURL:'https://fakeimg.pl/250x100/',categoryID:1},
      ];
      this.orderDate=new Date;
      this.prdListOfcat=this.prdList;
    }
    buy(prdprice:number, count :any){
        // let itemsCount:number=count;
        this.orderTotalPrice=+count*prdprice;
        

    }

    prdTrackByFn(index: number, prd:Iproduct):number{
      return prd.id;
    }
    filterProductsbyID(){
      this.prdListOfcat=this.prdList.filter(prd=>prd.categoryID==this.selectedcatID);
    }
}
