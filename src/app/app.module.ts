import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContebtComponent } from './main-contebt/main-contebt.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { TdfComponent } from './tdf/tdf.component';
import { LoginComponent } from './login/login.component';
import { ReactformComponent } from './reactform/reactform.component';
import { FormtestComponent } from './formtest/formtest.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContebtComponent,
    MainContentComponent,
    ProductsComponent,
    UsersComponent,
    PostsComponent,
    HomeComponent,
    TdfComponent,
    LoginComponent,
    ReactformComponent,
    FormtestComponent
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
    
    
   
    
    
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
