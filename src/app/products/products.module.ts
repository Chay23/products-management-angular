import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './product-list/products.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FilterPipe } from './product-list/filter.pipe';
import { ProductCreateComponent } from './product-create/product-create.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    FilterPipe,
    ProductCreateComponent,
  ],
  imports: [CommonModule, FormsModule, ProductsRoutingModule],
})
export class ProductsModule {}
