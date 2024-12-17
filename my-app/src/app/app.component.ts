import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/Header/header.component";
import { SidebarComponent } from "./Components/Sidebar/sidebar.component";
import { FooterComponent } from "./Components/Footer/footer.component";
import { HomeComponent } from "./Components/Home/home.component";
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "./Components/Order/Product-list/product-list.component";
import { FormsModule } from '@angular/forms';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';
import { OrderMasterComponent } from "./Components/Order/Product-list/order-master/order-master.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent, HomeComponent, CommonModule, ProductListComponent, FormsModule, USDtoEGPPipe, OrderMasterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected property name
})
export class AppComponent {
  title = 'my-app';
}

