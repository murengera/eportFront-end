import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,of, BehaviorSubject  } from 'rxjs';






@Injectable()
export class HomeService {


  private api_root ="http://127.0.0.1:8000/api/";
  httpHeaders=new HttpHeaders({'Content-type':'application/json'});
  isLoading: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);
  
  

  constructor( private http:HttpClient) { }





    
  /*


  university(): Observable<any>{
     const url = this.api_root + 'universities'
     

    return this.http.get<any>(url,{headers:this.httpHeaders});
  
    
  }
  secondary():Observable<any>{
    const url = this.api_root + 'secondary-list'
    return this.http.get<any>(url)

  } */
   
   
  getSchools(school):Observable<[any]>{
    const url = this.api_root + school
    return this.http.get<any>(url,{headers:this.httpHeaders})
  }
  


  populateForm(){
   
  }

  search(category,input){
    const urlUniv=this.api_root + category;
   return this.http.get(urlUniv +'?search=' + input);
  
  }
  getSchoolById(id:number):Observable<any>{
    const url = this.api_root + 'universities'
  return this.http.get(url+'/'+ id +'/');
  
}
deleteMovie(universityId):Observable<any>{
  const url = this.api_root + 'universities'


return this.http.delete(`${url}/${universityId}`);

}
deleteSecondary(secondaryId):Observable<any>{
  const url = this.api_root + 'secondary-list/'
return this.http.delete(`${url}/${secondaryId}`);

}
  
    
saveData(UniversityData,log){
  const f_data=new FormData();
  f_data.append('log',log);
  f_data.append('name',UniversityData.name);
  f_data.append('description',UniversityData.description);
  f_data.append('email',UniversityData.email);
  f_data.append('phone',UniversityData.phone);
  f_data.append('website',UniversityData.website); 
  f_data.append('province',UniversityData.province);
  f_data.append('district',UniversityData.district);
  f_data.append('sector',UniversityData.sector);
  //f_data.append('created_at',UniversityData.created_at);
  //f_data.append('key_person',UniversityData.key_person);
  f_data.append(' more_info ',UniversityData. more_info );
  f_data.append('ownershipstatus',UniversityData.ownershipstatus);
   return this.http.post<any>(this.api_root.concat('universities/'),f_data);

}
saveProgram(UniversityProgram){
  const f_data=new FormData();
 
  f_data.append('program',UniversityProgram.program);
  f_data.append('duration',UniversityProgram.duration);
  f_data.append('university',UniversityProgram.university)

   return this.http.post<any>(this.api_root.concat('programs/'),f_data);

}
}
