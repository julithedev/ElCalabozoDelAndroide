import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-producto-item',
  standalone: false,
  templateUrl: './producto-item.component.html',
  styleUrl: './producto-item.component.css',
})
export class ProductoItemComponent {
  @Input() producto: any;
  @Output() agregarAlCarrito = new EventEmitter<any>();

  agregar() {
    this.agregarAlCarrito.emit(this.producto);
  }
}
