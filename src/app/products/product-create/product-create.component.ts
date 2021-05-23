import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  constructor(private productService: ProductService) {}

  name: string;
  category: string;
  type: string;
  amount: number;
  price: number;

  product: Product;

  ngOnInit(): void {}

  getProductId(): number {
    return this.productService.getProductId();
  }

  addNewProduct(): void {
    this.product = {
      id: this.getProductId(),
      category: this.category,
      name: this.name,
      type: this.type,
      amount: this.amount,
      price: this.price,
    };
    this.productService.addProduct(this.product).subscribe((response) => {});
  }
}
