import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.scss']
})
export class GetDetailsComponent implements OnInit {
myId:any;
userArry:any[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  onGetDetails(){
    this.userService.findElementById(this.myId).subscribe(
      (response:any)=>{
        this.userArry.push(response);
        console.log(response)
       },
      (error:any)=>{
        console.log(error)
      }
    )
    
     }

}
