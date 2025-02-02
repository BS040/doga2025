import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"products", component:ProductsListComponent},
  {path:"login", component:LoginComponent},
  {path:"", component:LoginComponent},
  
  {path:"**", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
