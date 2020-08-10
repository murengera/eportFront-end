import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import{FormBuilder,Validators, FormGroup, FormControl} from '@angular/forms'
import { HomeService } from 'src/app/home.service';


@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent implements OnInit {
  fieldRequired = 'This field is required';
  hide = true;
  log:File=null;
  data:any = {};
  
 
  dialogRef: any;


  constructor(private formBuilder:FormBuilder,private api:HomeService,private dialogref:MatDialogRef<ProgramDetailComponent>) { }

  ngOnInit() {
  }
  formGroup = this.formBuilder.group({

    program:['',[Validators.required]],

    duration:['',[Validators.required,Validators.email]],
    
  });

  saveProduct(product){
    console.log(product);
  

    const obs = this.api.saveProgram(product);
   
    obs.subscribe((response:any)=>{
      console.log(" successfull inserted!",response);
   
      this.onClose()
     
      
    },(error:any)=>{
    
     console.log('error',error);
  
   
    })
  
  
   
  }
  onClose(){
    this.dialogref.close()
      }
}
