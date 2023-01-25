import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void{
    this.productService.getProducts()
      .subscribe({
        next: (res) => {
          this.products = res
        },
        error: (err) => console.log(err)
      }
      )
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id)
      .subscribe({
        next: res => {
          this.getProducts()
        }
      })
  }
}
