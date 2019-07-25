import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  oneProduct:any
  deleteProduct:any

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

  goHome() {
    this._router.navigate(['/'])
  }

  delete(id:string) {
    this._httpService.deleteOneProduct(id).subscribe((data:any)=> {
      this._router.navigate(['/'])
    })
  }

}
