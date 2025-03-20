import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-producto-item',
  standalone: false,
  templateUrl: './producto-item.component.html',
  styleUrl: './producto-item.component.css',
})
export class ProductoItemComponent {
  @Input() producto!: { nombre: string; precio: number; disponible: boolean };
  @Output() agregarAlCarrito = new EventEmitter<{
    nombre: string;
    precio: number;
  }>();

  agregar() {
    this.agregarAlCarrito.emit({
      nombre: this.producto.nombre,
      precio: this.producto.precio,
    });
  }
}
