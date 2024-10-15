import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductCardComponent } from "../product-card/product-card.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'products-list',
  standalone: true,
  imports: [ProductCardComponent, NgFor],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})

export class ProductsListComponent {
  @Input()
  public products: Product[] = []
  
}
