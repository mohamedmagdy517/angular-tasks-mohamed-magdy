import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../validations/userName.validator';
import { ConfirmPasswordValidator } from '../validations/confirmPassword.validator'; 


@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.scss']
})
export class ReactformComponent implements OnInit {




  registerationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(5),ForbiddenNameValidator(/superAdmin/)]],
    password:[''],
    confirmPassword:[''],
    email:[''],
    subscibe:[false],
    alternativeEmails:this.fb.array([]),
    address:this.fb.group({
       city:[''],
       state:[''],
       postalCode:['']
    })
},{validator:[ConfirmPasswordValidator]})

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }


loadData(){
  this.registerationForm.patchValue({
    userName:'ITI',
    address:{
      city:'minia',
      state:'Egypt',
      postalCode:'365777'
    }

  })
}

get userName()
  {
    return this.registerationForm.get('userName')
  }

  get email()
  {
    return this.registerationForm.get('email')

  }
  setEmailValidation()
  {
    this.registerationForm.get('subscibe')?.valueChanges.subscribe(checkedValue=>{
      if(checkedValue)
      {
        //set validation
        this.email?.setValidators(Validators.required)
      }
      else
      {
        //remove validation
        this.email?.clearValidators();
      }
      this.email?.updateValueAndValidity()
    })
  }

  get alternativeEmails()
  {
    return this.registerationForm.get('alternativeEmails') as  FormArray;
  }
  addEmail()
  {
    this.alternativeEmails.push(this.fb.control(''))
  }

}
