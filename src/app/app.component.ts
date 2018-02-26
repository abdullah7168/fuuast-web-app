import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  notification:any;
  student:any;
  idofrequest:any;
  constructor(public http: Http,private router: Router){

    var me = JSON.parse(localStorage.getItem('currentsuer'));
    this.student = me;


    this.notification = 0;
    window.setInterval(this.lookForReply(), 3000);
  }

  lookForReply(){
    let params = new URLSearchParams;
    params.append('student_id',this.student.id);
    this.http.post('http://localhost:8080/laravel/public/watch/degree-vf-reply',params)
             .map(res => res.json())
             .subscribe((data) => {
               if(data.status == 1){
                this.notification = this.notification + 1;
                this.idofrequest = data.notify.id;
               }
             });
  }

  


}
