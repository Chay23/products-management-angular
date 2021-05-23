import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  id: number;
  product: Product;
  loaded: boolean = false;

  category: string;
  name: string;
  type: string;
  amount: number;
  price: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.productService.getProduct(this.id).subscribe((response) => {
      this.product = response;
      this.loaded = true;
    });
  }

  updateProduct(): void {
    this.productService.editProduct(this.product).subscribe();
  }

  deleteProduct(): void {
    let result: boolean = confirm('Ви впевнені?');
    if (result) {
      this.productService.deleteProduct(this.id).subscribe();
      this.router.navigate(['/products']);
    }
  }
}
