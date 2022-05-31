import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
userArry:any;
  constructor(
    private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAllUsers()
  }
getAllUsers(){
   
  this.userService.findAllUser().subscribe(
    (response:any)=>{
      console.log("response")
      this.userArry=response;
    },(error:any)=>{
      console.log(error)
    }
  )
}
  onDelete(id:any){
    if(confirm("do you want to delete?")){
    this.userService.deleteUser(id).subscribe(
      (response:any)=>{
        this.getAllUsers()
        console.log("response")
        
      },(error:any)=>{
        console.log(error)
      
      }

    )
  }//if
else{
  return false;
}
}
onUpdate(id:any){
  this.userService.findElementById(id).subscribe(
    (response:any)=>{
      this.router.navigate(['update-user',id])
      console.log("response")
     
    },(error:any)=>{
      console.log(error)
    
    }
 )
  console.log(id)
}
}
