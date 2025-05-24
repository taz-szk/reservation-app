import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navbarComponent } from "./common/navbar/navbar.component";
import { productListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, navbarComponent, productListComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reservation-app';
}
