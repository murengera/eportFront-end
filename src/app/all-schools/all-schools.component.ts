import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-all-schools',
  templateUrl: './all-schools.component.html',
  styleUrls: ['./all-schools.component.css']
})
export class AllSchoolsComponent implements OnInit {
  p:number=1;
  

  panelOpenState = false;
  public university = [];
  public highSchool=[];
  allItems:any[];
  pages:any[];
  pager:any={};
  pageSize=4;
 


  constructor(private api: HomeService,private route:ActivatedRoute,private fb:FormBuilder) {}
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
    this.allItems=this.university;
    this.allItems=this.highSchool;
  
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
