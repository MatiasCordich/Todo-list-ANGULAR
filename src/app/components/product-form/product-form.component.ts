import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/interfaces/Product";
import { ProductService } from "../../services/product.service";
import { Router, ActivatedRoute} from "@angular/router"


@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"],
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    name: "",
    description: "",
    price: 0,
  };

  edit: boolean = false

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params

    if (params) {
      this.productService.getProduct(params['id'])
        .subscribe({
          next: res => {
            this.product = res
            this.edit = true
          }
        })
    }
  }
  

  submitProduct(): void {
    this.productService.createProduct(this.product)
      .subscribe({
        next: (res) => {
          console.log(res)
          this.router.navigate(['/'])
        },
        error: (err) => console.log(err),
      });
  }

  updateProduct():void {
    delete this.product.createdAt
    this.productService.updateProduct(this.product._id!, this.product)
      .subscribe({
        next: res => {
          console.log(res)
          this.router.navigate(['/product'])
        },
        error: err => console.log(err) 
      })
  }
}
