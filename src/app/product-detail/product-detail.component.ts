import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service'; // Importa el servicio

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  standalone: false,
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cartService: CartService // Inyecta el servicio
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.http.get<Product>(`https://api.example.com/api/1.4/inventory/computers?hwid=${productId}`)
      .subscribe(data => {
        this.product = data;
      });
  }

  // Método para agregar el producto al carrito
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert('producto agregado exitosamente!'); // Opcional: Mostrar un mensaje al usuario
  }
}