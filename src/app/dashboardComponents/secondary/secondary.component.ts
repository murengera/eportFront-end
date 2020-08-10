import { Component, OnInit,ViewChild } from '@angular/core';
import{MatTableDataSource,MatSort,  MatPaginator  } from '@angular/material';

import{HomeService} from '../../home.service'
  import { from } from 'rxjs';
  

  import {MatDialog,MatDialogConfig} from '@angular/material'
import { SecondaryDetailComponent } from '../secondary-detail/secondary-detail.component';

 




@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.css']
})



export class SecondaryComponent implements OnInit {
  columnsToDisplay = ['name','emails','phones'];
  
  public dataSource : any= [];


  @ViewChild(MatSort,{static: false}) sort: MatSort;
  @ViewChild(MatPaginator,{static: false}) paginator:MatPaginator; 
 

  constructor(   private apiManager: HomeService,private dialog:MatDialog ) { }
  logData(row){
    console.log(row)
  
  }

  onCreate()
  {
  
this.dialog.open(SecondaryDetailComponent);
  }
  onEdit(){
  
this.dialog.open(SecondaryDetailComponent)
  }
 
  
     
  applyFilter(filterValue:string){
  
    this.dataSource.filter=filterValue.trim().toLocaleLowerCase();
  
  }
    n

  ngOnInit() {
   
    this.getUsers();
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator

   
 

  }
  getUsers(){
    this.apiManager.getSchools("secondary-list").subscribe((response)=>{
      this.dataSource=response
      console.log("response",this.dataSource)
    },
    error=>{
      console.log(error);
    })
  }
  deleteUser(secondaryId):void{
    /* let snackBarRef=this.snackBar.open(this.message,actions,{duration:2000});
     snackBarRef.afterDismissed().subscribe(()=>{
       console.log('the snackbar was dismissed');
     });
     snackBarRef.onAction().subscribe(()=>{
       console.log('the snackbar action was triggered!');
     })*/
   
    this.apiManager.deleteSecondary(secondaryId).subscribe((response) => {
      this.dataSource = response;
      this.getUsers();
  
      console.log(" response",this.dataSource)
    },error => {
      
      console.log(error);
    })
  
  }

  applyFiltet(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLocaleLowerCase();
  }
}
