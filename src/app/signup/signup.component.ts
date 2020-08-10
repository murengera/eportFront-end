import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor( private  fb:FormBuilder) { }
formGroup=this.fb.group({
  name:[' ',Validators.required],
  email:['',Validators.required,Validators.email],
  password:['',Validators.required],
  confirmPassword:['',Validators.required]
})
  

  ngOnInit() {
  }

}
