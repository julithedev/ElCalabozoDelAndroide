import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  standalone: false,
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css',
})
export class ProductoDetalleComponent {
  nombreProducto: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.nombreProducto =
      this.route.snapshot.paramMap.get('nombre') || 'Producto no encontrado';
  }
}
