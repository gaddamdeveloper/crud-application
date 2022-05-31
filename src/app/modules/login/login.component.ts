import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({  
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
  constructor(private fb:FormBuilder,private route:Router) { }
email:string="vam@gmail.com"
password:string="vam@123"
  ngOnInit(): void {
    this.createLoginForm();
  }
createLoginForm(){
  this.loginForm=this.fb.group({
    'email':['',[Validators.required,]],
    'password':['',[Validators.required]]    
  })
}
onSubmit(){
  // console.log(this.loginForm.value)
  if(this.loginForm.value.email==this.email&&this.loginForm.value.password==this.password){
    alert("login sucess")
    this.route.navigate(['admin-home'])
  }else{
    alert("invalid")
  }
}

 



public getEmail()
{
  return this.loginForm.get('email');
}
public getpassword()
{
  return this.loginForm.get('password');
}

}


