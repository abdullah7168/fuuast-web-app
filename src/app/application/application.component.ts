import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  student:any;
  student_details:any;
  notification:any;
  constructor(public http: Http,private router: Router,) { 
    var me = JSON.parse(localStorage.getItem('currentsuer'));
    this.student = me;
    console.log(me)
    console.log(this.student);
    this.student.shift = '1';
    this.student.dpt_abbr = 'CS';
    
   }

  ngOnInit() {
  }

  sendApplication(){

    let params = new URLSearchParams;
    params.append('student_id',this.student.id);
    this.http.post('http://localhost:8080/laravel/public/api/degree-verification',params)
             .map(res => res.json())
             .subscribe((data) => {
                console.log('data');
             });
  }


}
