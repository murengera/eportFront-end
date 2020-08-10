import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllSchoolsComponent } from './all-schools/all-schools.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { SchoolByLocationComponent } from './school-by-location/school-by-location.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UniversitiesComponent } from './dashboardComponents/universities/universities.component';
import { ProgramsComponent } from './dashboardComponents/programs/programs.component';
import { FacultsComponent } from './dashboardComponents/facults/facults.component';
import { DepartmentsComponent } from './dashboardComponents/departments/departments.component';
import { SecondaryComponent } from './dashboardComponents/secondary/secondary.component';
import { SettingsComponent } from './dashboardComponents/settings/settings.component';
import { UniversityDetailComponent } from './dashboardComponents/university-detail/university-detail.component';
import { ProgramDetailComponent } from './dashboardComponents/program-detail/program-detail.component';
import { FacultsDetailComponent } from './dashboardComponents/facults-detail/facults-detail.component';
import { DepartementDetailComponent } from './dashboardComponents/departement-detail/departement-detail.component';
import { SecondaryDetailComponent } from './dashboardComponents/secondary-detail/secondary-detail.component';



const routes: Routes = [

  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'home/:id',component:SchoolDetailComponent},
  {path:'allschools',component:AllSchoolsComponent},
  {path:'schoolbylocation',component:SchoolByLocationComponent},
  {path:'administrator',component:DashboardComponent,
      children:[
         {path:'',redirectTo:'university',pathMatch:'full'},
         {path:'university',component:UniversitiesComponent},
          {path:'programs',component:ProgramsComponent},
          {path:'facults',component:FacultsComponent},
          {path:'departements',component:DepartmentsComponent},
          {path:'secondary',component:SecondaryComponent},
           {path:'setting',component:SettingsComponent},
           {path:'universitydetail',component:UniversityDetailComponent},
           {path:'programs/:id',component:ProgramDetailComponent},
           {path:'facults/:id',component:FacultsDetailComponent},
           {path:'departements/:id',component:DepartementDetailComponent},
           {path:'secondarydetail',component:SecondaryDetailComponent}
   ]},

  {path:'register',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},

  {path:'404',component:NotfoundComponent},

  {path:'**',redirectTo:'/404'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent]
