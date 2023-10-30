import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
  
  {path:'home',component:BookListComponent},  
  {path:'create',component:CreateBookComponent},
  {path:'update/:id',component:CreateBookComponent},
  // {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'list',redirectTo:'/home', pathMatch:'full'},

  {path:'',redirectTo:'/customerhome', pathMatch:'full'},
  {path:'customerhome',component:CustomerListComponent}, 
  {path:'customerlist/:age',component:CustomerListComponent},
  {path:'customeradd',component:CreateCustomerComponent},
  {path:'customeredit/:id',component:CreateCustomerComponent},
  {path:'customerlist',redirectTo:'/customerhome', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 

}
