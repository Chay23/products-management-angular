import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  products: Product[] = [];

  searchName: string = '';

  getProducts(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }

  deleteProduct(id: number): void {
    let result: boolean = confirm('Ви впевнені?');
    if (result) {
      this.productService.deleteProduct(id).subscribe();
      window.location.reload();
    }
  }
}
