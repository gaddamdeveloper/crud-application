import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
selectedId:any;
  updateForm:FormGroup;
  constructor(private fb:FormBuilder
    ,private userService:UserService,
    private router:Router,
    private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.createUpdateForm()
    this.selectedId=this.activateRoute.snapshot.params.id;
    console.log(this.selectedId)
    this.getUserById();
  }
  createUpdateForm(){
    this.updateForm=this.fb.group({
   'FristName':['',[Validators.required]],
   'LastName':['',[Validators.required]],
   'email':['',[Validators.required]],
   'password':['',[Validators.required]]
    })
 }
 submitUpdateForm(){
   console.log(this.updateForm.value)
   this.userService.updateUser(this.selectedId,this.updateForm.value).subscribe(
     (response:any)=>{
       console.log(response)
     },(error:any)=>{
       console.log(error)
     }
   )
  
    }
getUserById(){
  this.userService.findElementById(this.selectedId).subscribe(
    (response:any)=>{
      console.log(response)
      this.updateForm.controls[`fristName`].setValue(response.FristName)
      this.updateForm.controls[`LastName`].setValue(response.LastName)
      this.updateForm.controls[`email`].setValue(response.email)
      this.updateForm.controls[`password`].setValue(response.password)  
    },(error:any)=>{
      console.log(error)
    }
  )
}
}
