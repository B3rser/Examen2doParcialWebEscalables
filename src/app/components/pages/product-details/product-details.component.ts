import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../../interfaces/product';
import { ProductsService } from '../../../services/products.service';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgIf, MatButtonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  public product: Product = {
    id: -1,
    title: '',
    price: -1,
    description: '',
    category: '',
    image: '',
  };
  public show: boolean = false;

  private productService = inject(ProductsService);

  constructor(private route: ActivatedRoute, private router: Router) {
    var productTitle = null;
    var productId = 0;

    this.route.queryParams.subscribe((queryParams) => {
      productId = queryParams['id'];
      productTitle = queryParams['title'];
    });

    this.productService
      .searchProduct(productTitle ? productTitle : '', productId)
      .then((product) => {
        if(product.id === -1){
          this.router.navigate(['/not-found']);
        }
        this.product = product;
        this.show = true;
      })
      .catch((error) => {
        console.error('Error buscando el producto:', error);
        this.router.navigate(['/not-found']);
        this.product = {
          id: -1,
          title: '',
          price: -1,
          description: '',
          category: '',
          image: '',
        };
      });
  }
}
