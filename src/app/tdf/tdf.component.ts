import { Component, OnInit } from '@angular/core';
import { User } from '../User';



@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  constructor() { }
  topics=["Angular","React","JavaScript"];
  userModel:User=new User('Abanoub','12345678','abnabil@iti.gov.eg', '10389000','Angular');
  ngOnInit(): void {
  }
}

  
