import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css']
})
export class RepliesComponent implements OnInit {
  verificationreply:any;
  constructor(public http: Http,private router: Router,private route: ActivatedRoute,) { 
      let id = this.route.snapshot.paramMap.get('id');
      let params = new URLSearchParams;
      params.append('id',id);
      this.http.post('http://localhost:8080/laravel/public/get-reply-for',params)
                       .map(res => res.json())
                       .subscribe((data) => {
                         this.verificationreply = data.notify;
                         console.log(this.verificationreply);
                       });
   }

  ngOnInit() {
  }

  seenNotify(id){
    let params = new URLSearchParams;
      params.append('id',id);
      this.http.post('http://localhost:8080/laravel/public/api/change/notify',params)
                       .map(res => res.json())
                       .subscribe((data) => {
                         console.log('notification seen');
                         this.router.navigate(['/']);
                       });
  }

}
