import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import {FormGroup, FormControl} from '@angular/forms'

import {Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
    
  panelOpenState = false;
  public university = [];
  public highSchool=[];
  
  p:number=1;

 

  constructor(private api: HomeService,private route:ActivatedRoute,private fb:FormBuilder) {
   

  }
  registrationForm=this.fb.group({
    schoolName:[''],
    schoolOption:['']

  })

  onSubmit( ){

     if(this.registrationForm.value.schoolOption == "University") {
      this.api.search(  "universities",this.registrationForm.value.schoolName).subscribe((response:any) => {
        this.university = response
        console.log(response);
        console.log(" response",this.university);
      })
    } 
 
      else if(this.registrationForm.value.schoolOption == "Secondary")
    {

      this.api.search( "secondary-list",this.registrationForm.value.schoolName).subscribe((response:any) => {
        this.highSchool = response
        console.log(response)
        console.log(" response",this.highSchool);
      })
      
    }
       
   
  
   
  }

  ngOnInit() {

    
    this.universities()
this.secondary()
  

  }
  universities(){

    this.api.getSchools("universities").subscribe((response) => {
      this.university = response
      console.log(" response",this.university)
    },error => {
      console.log(error);
    })
  }
  secondary(){
 this.api.getSchools("secondary-list").subscribe((response)=>{
     this.highSchool=response
     console.log("response",this.highSchool)
   },
   error=>{
     console.log(error);
   })
  }

  


}
