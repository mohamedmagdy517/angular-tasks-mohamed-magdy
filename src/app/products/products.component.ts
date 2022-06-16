import { Component, OnInit } from '@angular/core';
//import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  DisCount : DiscountOffers;
  storeName:string ;
  storeLogo :string;
  productList : Iproduct [];
  categoryList : Icategory[];
  clientName:string;
  Ispurshased:boolean;
 // public ProductService:ProductServiceService
  constructor(){



      this.DisCount=DiscountOffers.Discount2,
      this.storeName=" t - shirt ",
      this.storeLogo= 'assets/design.jpg',
      this.productList=[
          {
              ID:1,
              Name:"mobile hwawei",
              quantity:40,
              price :90 ,
              img :'new image'

          },
          {
              ID:2,
              Name:"lap top  hwawei",
              quantity:40,
              price :90 ,
              img :'new image3'

          },
         
      ]
      this.categoryList=[

          {
              ID: 4,
              Name: "  clothes",
              

          },

          {
              ID: 5,
              Name: "  mobiles",
              

          },
          

          
      
      ]
     // products[]:any[]=[];
     
     this.clientName="shaban";
     this.Ispurshased=true;
    
      
     
  }
  ngOnInit(): void {
    }

    public hasAccess(role: DiscountOffers) {
      //check role type and return true or false
   }
   isShown: boolean = true ; // hidden by default


toggleShow() {

this.isShown = ! this.isShown;

}


   
  
  
      }

export interface Icategory {
  ID: number;
  Name: string;
  
  
}
/*
export class ProductsComponent implements OnInit {
  DisCount : DiscountOffers;
  storeName:string ;
  storeLogo :string;
  productList : Iproduct [];
  categoryList : Icategory[];
  clientName:string;
  Ispurshased:boolean;

  constructor(){

      this.DisCount=1,
      this.storeName=" t - shirt ",
      this.storeLogo=" tawheed logo",
      this.productList=[
          {
              ID:1,
              Name:"mobile hwawei",
              quantity:40,
              price :90 ,
              img :'new image'

          },
          {
              ID:2,
              Name:"lap top  hwawei",
              quantity:40,
              price :90 ,
              img :'new image3'

          },
         
      ]
      this.categoryList=[

          {
              ID: 4,
              Name: "  clothes",
              

          },

          {
              ID: 5,
              Name: "  mobiles",
              

          },
      ]
     
     this.clientName="shaban";
     this.Ispurshased=true;

     
  }
  ngOnInit(): void {
    }
  
  
      }
*/
      enum DiscountOffers
{
Discount2='No DisCount ',
Discount1='Discount1 10% ' ,
Discount3='Discount3 20%',

}

export interface Iproduct {
  ID: number;
  Name: string;
  quantity:number;
  price:number;
  img:string
}


