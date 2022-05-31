import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
signUpForm:FormGroup;
  constructor(private fb:FormBuilder
    ,private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.createSignUpForm()
  }
  createSignUpForm(){
    this.signUpForm=this.fb.group({
   'FristName':['',[Validators.required]],
   'LastName':['',[Validators.required]],
   'email':['',[Validators.required]],
   'password':['',[Validators.required]]



    })
  }
onSubmit(){
  console.log(this.signUpForm.value)
  this.userService.createUser(this.signUpForm.value).subscribe(
    (response:any)=>{
      alert("created succesfully!!!!!!!!!!!!!!!!!")
    console.log(response);
    // this.router.navigate(['login'])
    },(error:any)=>{
      console.log(error)

    })
    }
  }

