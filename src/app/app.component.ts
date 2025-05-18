import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navbarComponent } from "./common/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, navbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reservation-app';
}
