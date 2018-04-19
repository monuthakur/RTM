import { Component, OnInit } from '@angular/core';

import { logInUserService } from '../services/logInUser.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  providers: [logInUserService]
})
export class LogInComponent implements OnInit {
  public user: any = {};
  constructor(public loginuser: logInUserService, public router: Router) { }

  ngOnInit() {
  }

  submitlogIn(data){
    console.log(data)
    this.loginuser.loginNewUser(data).subscribe(
        success => {
            console.log(success, 'data')
  
            this.router.navigate(['dashboard']);
            
        },error => {
            console.log(error, 'data')
        }
    
    ) 
    
  
  }
  
}



