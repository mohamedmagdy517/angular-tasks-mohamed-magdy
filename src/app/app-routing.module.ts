import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { TdfComponent } from './tdf/tdf.component';
import { LoginComponent } from './login/login.component';
import { ReactformComponent } from './reactform/reactform.component';
import { FormtestComponent } from './formtest/formtest.component';



//const routes: Routes = [];

const routes: Routes = [
  { path:'products', component:ProductsComponent},
  { path:'users',  component:UsersComponent},  
  { path:'posts',  component:PostsComponent},   
  { path:'home',   component:HomeComponent}, 
  { path:'register',   component:TdfComponent},   
  { path:'login',   component:LoginComponent}, 
  { path:'reactform',   component:ReactformComponent}, 
  { path:'formtest',   component:FormtestComponent}, 
  
  
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  


