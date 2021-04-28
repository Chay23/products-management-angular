import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './product-list/products.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FilterPipe } from './product-list/filter.pipe';

@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent, FilterPipe],
  imports: [CommonModule, FormsModule, ProductsRoutingModule],
})
export class ProductsModule {}
