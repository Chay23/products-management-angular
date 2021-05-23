import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:3000/products';
  length: number;

  getProducts() {
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id: number) {
    return this.http.get<Product>(this.url + '/' + id);
  }

  getProductId(): number {
    this.getProducts().subscribe((response) => {
      this.length = response.length + 1;
    });
    return this.length + 1;
  }

  addProduct(product: Product) {
    return this.http.post(this.url, product);
  }

  editProduct(product: Product) {
    return this.http.put(this.url + '/' + product.id, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
