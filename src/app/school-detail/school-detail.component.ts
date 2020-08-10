import { Component, OnInit,Input } from '@angular/core';
import { HomeService } from '../home.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';

import { from } from 'rxjs';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css']
})
export class SchoolDetailComponent implements OnInit {
    post:[];

  constructor(private route:ActivatedRoute,private api:HomeService,private router:Router) { }

  ngOnInit() {
    this.api.getSchoolById(this.route.snapshot.params['id']).subscribe((data)=>{
      console.log(data);
      this.post=data;
    });
  

    
  }
  

}
