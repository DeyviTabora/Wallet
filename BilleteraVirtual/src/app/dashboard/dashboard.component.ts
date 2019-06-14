import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { User } from '../Models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route = route;
    this.router =router;
   }

  ngOnInit() {
    if(this.getUser() === null){
      this.router.navigate(["/login"]);
    }
    this.user= {Email: localStorage.getItem("Email"), UserName : '', Password: '' };

  }

  getUser(){
    return localStorage.getItem('token');
  }

  signOut(){
    debugger
    localStorage.removeItem("token");
    localStorage.removeItem("Email");
    localStorage.removeItem("UserId");
    this.router.navigate(["/login"]);
  }

}
