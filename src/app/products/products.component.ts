import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productServise: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  products: Product[] = [];

  searchName: string = ''

  getProducts(): void {
    this.products = this.productServise.getProducts();
  }
}
