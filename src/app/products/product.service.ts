import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Product[] {
    return PRODUCTS;
  }
  getProduct(id: number | string) {
    return this.getProducts().find((product) => product.id == id);
  }
  addProduct(product : Product){
    // implement addProducts
  }
}
