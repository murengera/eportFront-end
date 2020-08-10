import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import{FormBuilder,Validators, FormGroup, FormControl} from '@angular/forms'
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-secondary-detail',
  templateUrl: './secondary-detail.component.html',
  styleUrls: ['./secondary-detail.component.css']
})
export class SecondaryDetailComponent implements OnInit {
  fieldRequired = 'This field is required';
  hide = true;
  log:File=null;
  data:any = {};
  
  discount:any;
  dialogRef: any;


  constructor(private formBuilder:FormBuilder) { }
   
  formGroup = this.formBuilder.group({
    name:['',[Validators.required]],
    Description:['',[Validators.required]],
    Email:['',[Validators.required,Validators.email]],
    Phone:['',[Validators.required,Validators.minLength(10)]],
    Province:['',[Validators.required]],
    District:['',[Validators.required]],
    Sector:['',[Validators.required]],
    Website:['',[Validators.required]],
    key_person:['',[Validators.required]],
    more_Info:['',[Validators.required]],
    log:['',[Validators.required]],
    created_at:['',[Validators.required]],
    option:['',[Validators.required]],
  });
  saveProduct(product){
    console.log(product);
  

   // const obs = this.api.saveData(product);
   
    // obs.subscribe((response:any)=>{
       // console.log("ok",response);
        
      //},(error:any)=>{
      
        //console.log('error',error);
     // })
  
   
  }
  get name() {
    return this.formGroup.get('name') as FormControl;
  }


  onFileSelected(event) {
    if (event.target.files.length > 0) {
      this.log = <File>event.target.files[0];
    }
  }


  ngOnInit() {
  }


}
