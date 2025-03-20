import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent {
  productos = [
    { nombre: 'Procesador AMD Ryzen 5', precio: 150, disponible: true },
    { nombre: 'Tarjeta Gráfica RTX 3060', precio: 350, disponible: false },
    { nombre: 'Memoria RAM 16GB DDR4', precio: 80, disponible: true },
    { nombre: 'SSD NVMe 1TB', precio: 120, disponible: true },
  ];

  carrito: { nombre: string; precio: number }[] = [];

  agregarAlCarrito(producto: { nombre: string; precio: number }) {
    this.carrito.push(producto);
    console.log('Carrito', this.carrito);
  }
}
