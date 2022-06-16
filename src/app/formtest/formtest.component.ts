import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../validations/userName.validator';
import { ConfirmPasswordValidator } from '../validations/confirmPassword.validator'; 



 @Component({
   selector: 'app-formtest',
   templateUrl: './formtest.component.html',
   styleUrls: ['./formtest.component.scss']
 })
export class FormtestComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  // registerationForm=new FormGroup({
  //     userName:new FormControl(''),
  //     password:new FormControl(''),
  //     confirmPassword:new FormControl(''),
  //     address:new FormGroup({
  //        city:new FormControl(''),
  //        state:new FormControl(''),
  //        postalCode:new FormControl('')
  //     })
  // })
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

  ngOnInit(): void {
  }

  loadData()
  {
    // this.registerationForm.setValue({
    //   userName:'ITI',
    //   password:'12345',
    //   confirmPassword:'12345',
    //   address:{
    //     city:'Assiut',
    //     state:'Egypt',
    //     postalCode:'71111'
    //   }

    // })

    this.registerationForm.patchValue({
      userName:'ITI',
      address:{
        city:'Assiut',
        state:'Egypt',
        postalCode:'71111'
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
