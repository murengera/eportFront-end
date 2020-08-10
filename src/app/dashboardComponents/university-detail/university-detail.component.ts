import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import{FormBuilder,Validators, FormGroup, FormControl} from '@angular/forms'
import { HomeService } from 'src/app/home.service';


@Component({
  selector: 'app-university-detail',
  templateUrl: './university-detail.component.html',
  styleUrls: ['./university-detail.component.css']
})
export class UniversityDetailComponent implements OnInit {


  fieldRequired = 'This field is required';
  hide = true;
  log:File=null;
  data:any = {};
  
 
  dialogRef: any;






  constructor(private formBuilder:FormBuilder,private api:HomeService,private dialogref:MatDialogRef<UniversityDetailComponent>) { }

  ngOnInit() {

   
    
    }

  
  

  
    formGroup = this.formBuilder.group({

      name:['',[Validators.required]],
      description:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.minLength(10)]],
      province:['',[Validators.required]],
      district:['',[Validators.required]],
      sector:['',[Validators.required]],
      website:['',[Validators.required]],
     // key_person:['',[Validators.required]],
     more_info :['',[Validators.required]],
      log:['',[Validators.required]],
      //created_at:['',[Validators.required]],
      ownershipstatus:['',[Validators.required]],
    });



  saveProduct(product){
    console.log(product);
  

    const obs = this.api.saveData(product,this.log);
   
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

  get name() {
    return this.formGroup.get('name') as FormControl;
  }


  onFileSelected(event) {
    if (event.target.files.length > 0) {
      this.log = <File>event.target.files[0];
    }
  }







onEdit(){
  
}





 

}
