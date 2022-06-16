import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  confirmpassword:string=''
  topics=["Twitter","FaceBook","Whatsapp"];
  userModel:User=new User('mohamed','enter','mohamedmagdy@gmail.gov.eg' ,'0202020202','twiter');

  
  ngOnInit(): void {
  }
  onSubmit(){

    console.log(this.userModel);
    
  }

}

