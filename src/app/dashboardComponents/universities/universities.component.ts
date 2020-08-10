import { Component, OnInit ,ViewChild} from '@angular/core';
import{MatTableDataSource,MatSort,  MatPaginator  } from '@angular/material';
import{HomeService} from '../../home.service'
  import { from } from 'rxjs';
  
  import {MatDialog,MatDialogConfig} from '@angular/material'
import { UniversityDetailComponent } from '../university-detail/university-detail.component';
 
import {MatSnackBar} from '@angular/material'
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';



@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})


export class UniversitiesComponent implements OnInit {

  
  columnsToDisplay = ['name','email','phone','website','province'];
  
     public dataSource : any= [];
     public id;
     sign="+"
message="University Deleted";
  @ViewChild(MatSort,{static: false}) sort: MatSort;
  @ViewChild(MatPaginator,{static: false}) paginator:MatPaginator; 

  

  constructor(   private apiManager: HomeService,private dialog:MatDialog ,private snackBar:MatSnackBar) { }
logData(row){
  console.log(row)

}

applyFilter(filterValue:string){

  this.dataSource.filter=filterValue.trim().toLocaleLowerCase();

}
  ngOnInit() {
    this.getUsers();
  
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
 
   


   
  }
  update=()=>{
    
  }
  onCreate()
  {
  
this.dialog.open(UniversityDetailComponent);
  }
  onEdit(row){
  
this.dialog.open(UniversityDetailComponent)
  }
 
  getUsers(){
    this.apiManager.getSchools("universities").subscribe((response)=>{
      this.dataSource=response
      console.log("response",this.dataSource)
    },
    error=>{
      console.log(error);
    })
  }
  deleteUser(universityId,actions):void{
     let snackBarRef=this.snackBar.open(this.message,actions,{duration:2000});
     snackBarRef.afterDismissed().subscribe(()=>{
       console.log('the snackbar was dismissed');
     });
     snackBarRef.onAction().subscribe(()=>{
       console.log('the snackbar action was triggered!');
     })

    this.apiManager.deleteMovie(universityId).subscribe((response) => {
      this.dataSource = response;
      this.getUsers();
  
      console.log(" response",this.dataSource)
    },error => {
      
      console.log(error);
    })
  
  }

}
