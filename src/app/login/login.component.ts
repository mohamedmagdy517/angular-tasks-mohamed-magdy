import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  userModel:User=new User('mohamed','enter','mohamedmagdy@gmail.gov.eg' ,'0202020202','twiter');
  ngOnInit(): void {
  }

  onSubmit(){

    console.log(this.userModel);
    
  }

}
