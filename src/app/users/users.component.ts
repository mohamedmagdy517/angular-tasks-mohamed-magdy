import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

   constructor(private productService:ProductServiceService) { }
  users:any[]=[];
  ngOnInit(): void {
     this.productService.getProducts().subscribe(productData=>
      {
         this.users=productData;
       })
   }

 
 

}





