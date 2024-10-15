import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/products';

  private _products: Product[] = [];

  public get products(): Product[] {
    return this._products;
  }

  public searchProduct(title: string, id: number): Promise<Product> {
    return new Promise((resolve, reject) => {
      this.http.get<Product[]>(this.apiUrl).subscribe({
        next: (response) => {
          this._products = response;
          const res = this._products.find(
            (product) => product.title === title && product.id === Number(id)
          );
          resolve(res ? res : {
            id: -1,
            title: '',
            price: -1,
            description: '',
            category: '',
            image: '',
          });
        },
        error: (error) => {
          console.log(error);
          reject({
            id: -1,
            title: '',
            price: -1,
            description: '',
            category: '',
            image: '',
          } as Product);
        },
      });
    });
  }

  public fetchProducts() {
    this.http.get<Product[]>(this.apiUrl).subscribe({
      next: (response) => {
        this._products = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  constructor() {}
}
