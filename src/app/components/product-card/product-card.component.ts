import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, RouterLink, RouterLinkActive],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {
  private currentPage = "";

  @Input()
  public product : Product = {
    id:-1,
    title:"", 
    price: -1, 
    description: "", 
    category: "", 
    image: "",
  };

  public goTo(page: string): void {
    this.currentPage = page;
  }
}
