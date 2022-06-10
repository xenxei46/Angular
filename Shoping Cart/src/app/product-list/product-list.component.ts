import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  alert(){
    window.alert('The Product has been shared!');
  }

  onNotify() {
    window.alert('you will be notified when the product goes on sale')
  }
}
