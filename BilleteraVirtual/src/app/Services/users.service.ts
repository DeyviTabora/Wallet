import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient : HttpClient) {
    this.httpClient = httpClient;
   }

   Login(user : User){
     let Post = {Email:user.Email,password:user.Password};
     let header = new HttpHeaders({'Content-Type': 'application/json'})
     debugger;
     return this.httpClient.post('http://localhost:58188/api/Login/authenticate',Post, {headers: header})
   }
}
