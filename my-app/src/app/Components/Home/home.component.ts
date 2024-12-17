import { Component } from '@angular/core';
import { StoreData } from '../../ViewModels/store-data';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  storeInfo: StoreData;
  isimageshown:boolean=true;
  constructor(){
    this.storeInfo= new StoreData("al ahly store","https://picsum.photos/350/200",['New cairo','alex' ,'obour', 'Dubai']);
  }
  toggleImage(){
    this.isimageshown=!this.isimageshown;
  }

}
