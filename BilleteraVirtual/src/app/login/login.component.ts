import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../Services/users.service';
import { NgForm } from '@angular/forms';
import { User } from '../Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User;
  constructor(private route: ActivatedRoute, private user : UsersService, private router: Router) { 
    this.route = route;
    this.user = user;
    this.router = router;
  }

  resetForm(form? : NgForm){
    if(form != null){
      form.reset();
    }

    this.users = {
      Email: "",
      Password: "",
      UserName: ""
    };
  }
  onClick(form : NgForm){
    debugger;
    this.user.Login(form.value)
    .subscribe((data : any) => {localStorage.setItem("token", data.Token); localStorage.setItem("UserId", data.UserId); localStorage.setItem("Email", data.Email); this.router.navigate([""])})
  }

  ngOnInit() {
    this.resetForm();
  }

}
