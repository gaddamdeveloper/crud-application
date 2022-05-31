import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseURL="http://localhost:3000/user"

  constructor(private http:HttpClient) { }
  //creating  (post)

  public createUser(user:any){

    return this.http.post(`${this.baseURL}`,user)
}
//displaying all records (get)
public findAllUser(){
  return this.http.get(`${this.baseURL}`)
}
//for delete records  based on id :we use delete api
public deleteUser(id:any){
  return this.http.delete(`${this.baseURL}/${id}`);
} 
// get the records based on id:get()
public findElementById(id:any){
  return this.http.get(`${this.baseURL}/${id}`)
} 
// update based on user id and send object (put)
public updateUser(id:any,user:any){
  return this.http.put(`${this.baseURL}/${id}`,user)
}
}

