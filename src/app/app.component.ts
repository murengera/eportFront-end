import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material'
import{MatDialog} from '@angular/material';
import { HomeService } from './home.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading: boolean;

  opened=true
  constructor(private spinner: NgxSpinnerService) {}
 

 
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }



}

 

 