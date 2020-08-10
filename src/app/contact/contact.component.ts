import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators, FormGroup, FormControl} from '@angular/forms'
import { HomeService } from '../home.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  fieldsRequired="this field is required"

  constructor(private formbuilder:FormBuilder,private api:HomeService) { }

  

  ngOnInit() {
  }

  formGroup = this.formbuilder.group({

    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    message:['',[Validators.required]],
    
  
  });
}
