import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  titulo: string = 'Bienvenidos a El Calabozo Del Androide';
  descripcion: string =
    'Encuentra los mejores componentes para tu PC al mejor precio';
}
