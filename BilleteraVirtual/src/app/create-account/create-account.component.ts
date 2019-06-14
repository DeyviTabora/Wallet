import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Models/user';
import { UserCreateService } from '../Services/user-create.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  users: User;
  
  constructor(private route: ActivatedRoute, private userCreate: UserCreateService, private router : Router) { 
    this.route = route;
    this.userCreate = userCreate;
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
  onClick(Form: NgForm){
    this.userCreate.CreateAccount(Form.value).subscribe((data: any) => {
      this.router.navigate(["/login"])
    })
  }

  ngOnInit() {
    this.resetForm();
  }

}
