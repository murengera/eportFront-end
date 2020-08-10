import { Component, OnInit ,ViewChild} from '@angular/core';
import{MatTableDataSource,MatSort,  MatPaginator  } from '@angular/material';
import{HomeService} from '../../home.service'
  import { from } from 'rxjs';
  

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  columnsToDisplay = ['name','head_department','contacts','email'];
  public dataSource : any= [];

  @ViewChild(MatSort,{static: false}) sort: MatSort;
  @ViewChild(MatPaginator,{static: false}) paginator:MatPaginator; 
  constructor( private apiManager: HomeService) { }
  logData(row){
    console.log(row)
  
  }

  applyFilter(filterValue:string){

    this.dataSource.filter=filterValue.trim().toLocaleLowerCase();
  
  }
  ngOnInit() {
    this.getUsers();
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator
  }
  getUsers(){
    this.apiManager.getSchools("departments").subscribe((response)=>{
      this.dataSource=response
      console.log("response",this.dataSource)
    },
    error=>{
      console.log(error);
    })
  }

}
