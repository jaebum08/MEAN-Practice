import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  oneProduct:any
  errors: any = {}

  constructor(private _httpService:HttpService,
              private _activatedRoute:ActivatedRoute,
              private _router:Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params:Params)=> {
      this.getOne(params.id)
    })
  }

  getOne(id) {
    this._httpService.getOneProduct(id).subscribe((data:any)=> {
      this.oneProduct = data.products
    })
  }

  onSubmit(id) {
    this._httpService.updateProduct(id, this.oneProduct).subscribe((data:any)=> {
      if(!data.hasOwnProperty('error')) {
        this._router.navigate(['/'])
      } else {
        this.errors = data.error
      }
    })
  }

  resetHome(id) {
    this.getOne(id)
  }


}
