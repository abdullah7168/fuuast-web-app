import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  misid:any;
  password:any;
  temp:any;
  student:any;
  constructor(public http: Http,private router: Router,) { 
    this.misid = '';
    this.password = '';
  }


  submitApplication() {
    let params = new URLSearchParams();
    params.append('misid', this.misid);
    params.append('password', this.password);

    this.http.post('http://localhost:8080/laravel/public/api/student/login',params)
             .map(res => res.json())
             .subscribe((data) => {
                this.temp = data;
                console.log(this.temp.student);
                if(this.temp.student != undefined){
                    //store to native storage
                    this.router.navigate(['/app-request']);
                    localStorage.setItem('currentsuer', JSON.stringify(this.temp.student));
                } else {

                  // start a toast to display error
                  // or alert
                  
                }
             });
  }

  ngOnInit() {
  }

}
