import { Component, OnInit ,ViewChild} from '@angular/core';
import{MatTableDataSource,MatSort,  MatPaginator, MatDialog, MatSnackBar  } from '@angular/material';
import{HomeService} from '../../home.service'
  import { from } from 'rxjs';
import { UniversityDetailComponent } from '../university-detail/university-detail.component';
import { ProgramDetailComponent } from '../program-detail/program-detail.component';
  

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  
  
  
  columnsToDisplay = ['program','duration','university'];
  
     public dataSource : any= [];


  @ViewChild(MatSort,{static: false}) sort: MatSort;
  @ViewChild(MatPaginator,{static: false}) paginator:MatPaginator; 
  constructor(private apiManager: HomeService ,private dialog:MatDialog ,private snackBar:MatSnackBar) { }

  logData(row){
    console.log(row)
  
  }

  ngOnInit() {
    this.getUsers();
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator
  }
  getUsers(){
    this.apiManager.getSchools("programs").subscribe((response)=>{
      this.dataSource=response
      console.log("response",this.dataSource)
    },
    error=>{
      console.log(error);
    })
  }

  onCreate()
  {
  
this.dialog.open(ProgramDetailComponent);
  }
  applyFilter(filterValue:string){

    this.dataSource.filter=filterValue.trim().toLocaleLowerCase();
  
  }

}
