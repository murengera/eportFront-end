import { Component, OnInit ,ViewChild} from '@angular/core';
import{MatTableDataSource,MatSort,  MatPaginator  } from '@angular/material';
import{HomeService} from '../../home.service'
  import { from } from 'rxjs';
  



@Component({
  selector: 'app-facults',
  templateUrl: './facults.component.html',
  styleUrls: ['./facults.component.css']
})
export class FacultsComponent implements OnInit {
  columnsToDisplay = ['id','name','fees','course'];
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
    this.apiManager.getSchools("Facults/").subscribe((response)=>{
      this.dataSource=response
      console.log("response",this.dataSource)
    },
    error=>{
      console.log(error);
    })
  }

}
