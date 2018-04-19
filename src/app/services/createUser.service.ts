import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Services } from '@angular/core/src/view';
import { Body } from '@angular/http/src/body';

@Injectable()
export class createUserService {
    
  constructor(private http: Http) {}

  /* For  Create User Services */
  createNewUser(formData){
      let data: any ={
          "userName": formData.userName,
          "email": formData.email,
          "password":formData.password,
          "country":formData.country,
          "phoneNumber" :formData.phoneNumber
      }

      let url = 'http://180.151.84.102/trainingbatch/signup';
      return this.http.post(url, data).map(res => res.json());
  }

} 
  
  
