import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Services } from '@angular/core/src/view';
import { Body } from '@angular/http/src/body';

@Injectable()
export class logInUserService {
logInUserService
    constructor(private http: Http) { }

    /* For  login Services */
    loginNewUser(formData) {
        console.log(formData)
        let data: any = {
            "email": formData.email,
            "password": formData.password
        }

        let url = 'http://180.151.84.102/trainingbatch/userlogin';
        return this.http.post(url, data).map(res => res.json());
    }

}

