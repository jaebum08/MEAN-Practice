import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  createProduct(product) {
    return this._http.post('/api/products', product)
  }
  allProducts() {
    return this._http.get('/api/products')
  }
  getOneProduct(id) {
    return this._http.get('/api/'+id)
  }
  deleteOneProduct (id){
    return this._http.delete('/api/'+id)
  }
  updateProduct(id, product) {
    return this._http.put('/api/'+id+'/edit', product)
  }
}
