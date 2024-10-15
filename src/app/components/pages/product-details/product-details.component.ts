import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public show : boolean = false;

  private productService = inject(ProductsService);

  constructor(private route: ActivatedRoute) {
    var productTitle = null;
    var productId = 0;
    this.route.paramMap.subscribe((params) => {
      productTitle = params.get('productIDC');
    });

    this.route.queryParams.subscribe((queryParams) => {
      productId = queryParams['id'];
    });

    this.productService
      .searchProduct(productTitle ? productTitle : '', productId)
      .then((product) => {
        this.product = product;
        this.show = true;
      })
      .catch((error) => {
        console.error('Error buscando el producto:', error);
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
