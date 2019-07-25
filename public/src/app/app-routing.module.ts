import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { NewProductComponent } from './new-product/new-product.component';


const routes: Routes = [
  { path:'', redirectTo:'/products', pathMatch:'full'},
  { path: 'products', component:ListProductComponent },
  { path: 'products/new', component:NewProductComponent },
  { path: 'products/:id', component:DetailsProductComponent },
  { path: 'products/:id/edit', component:EditProductComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
