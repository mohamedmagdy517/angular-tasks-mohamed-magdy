import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor( private postsService:PostServiceService) { }

  posts:any[]=[];
  ngOnInit(): void {
     this.postsService.getProducts().subscribe(productData=>
      {
         this.posts=productData;
       })
   }
  }


