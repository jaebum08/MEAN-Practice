import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  newProduct: any
  errors: any = {}
  constructor(private _httpService:HttpService,
              private _router: Router) { }

  ngOnInit() {
    this.newProduct = {
      name:"",
      quantity: "",
      price: "",
    }
  }

  onSubmit() {
    this._httpService.createProduct(this.newProduct).subscribe((data:any)=>{
      if(!data.hasOwnProperty('error')) {
        this._router.navigate(['/'])
      }else{
        this.errors = data.error
      }
    })
  }


  resetHome() {
    this._router.navigate(['/'])
  }
}
