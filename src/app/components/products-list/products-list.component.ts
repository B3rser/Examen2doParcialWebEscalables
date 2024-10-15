import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductCardComponent } from "../product-card/product-card.component";
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'products-list',
  standalone: true,
  imports: [ProductCardComponent, NgFor, MatIconModule, MatButtonModule, MatMenuModule ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})

export class ProductsListComponent {
  @Input()
  public products: Product[] = [];

  @Input()
  public categories : Set<String> = new Set();

  @Output()
  public filterProductsEmitter : EventEmitter<String> = new EventEmitter();

  public filterProducts( category : String){
    this.filterProductsEmitter.emit(category)
  }
  
}
