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

  constructor(public http: Http,private router: Router,) { 
    var me = JSON.parse(localStorage.getItem('currentsuer'));
    this.student = me;
    console.log(me)
    console.log(this.student);
   }

  ngOnInit() {
  }

}
