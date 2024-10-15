import { Component, inject} from '@angular/core';
import { ProductsListComponent } from '../../products-list/products-list.component';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../interfaces/product';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
  private productService = inject(ProductsService);

  public get products(): Product[] {
    return this.productService.products;
  }

  constructor() {
    this.productService.fetchProducts();
  }
}
