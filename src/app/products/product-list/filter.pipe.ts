import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(products: Product[], searchValue: string): Product[] {
    if (!searchValue.trim()) {
      return products;
    }
    return products.filter((product) => {
      return (
        product.name
          .toLocaleLowerCase()
          .indexOf(searchValue.toLocaleLowerCase()) !== -1
      );
    });
  }
}
