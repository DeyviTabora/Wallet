import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserCreateService {

  constructor(private httpClien : HttpClient) {
    this.httpClien = httpClien;
   }

   CreateAccount(user: User){
    let Post = {UserName:user.UserName,Email:user.Email,password:user.Password};
    let header = new HttpHeaders({'Content-Type': 'application/json'})
    debugger;
    return this.httpClien.post('http://localhost:58188/api/Users',Post, {headers: header})
   }
}
