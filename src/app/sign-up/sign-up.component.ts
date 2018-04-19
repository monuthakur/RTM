import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { createUserService } from '../services/createUser.service';

import { Router } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public formData: any = {};

  constructor(public cNU: createUserService, public router: Router, public toastr: ToastsManager, vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  submitSignUp(formData){
    this.cNU.createNewUser(this.formData).subscribe(
        success => {
            //console.log(success, 'data')
            this.toastr.success('You are awesome!', 'Success!');
            

            this.router.navigate(['login']);
            
        },error => {
            this.toastr.error('This is not good!', 'Oops!');
            console.log(error, 'data')
        }
    
    ) 
    

}

}
