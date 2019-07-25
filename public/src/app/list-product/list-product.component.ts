import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  getAllProduct=[]
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this.allProducts()
  }

  allProducts() {
    this._httpService.allProducts().subscribe((data:any)=> {
      console.log(data.products);
      
      this.getAllProduct = data.products
    })
  }
}

