import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {FormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavigationComponent } from './navigation/navigation.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SchoolByLocationComponent } from './school-by-location/school-by-location.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { AllSchoolsComponent } from './all-schools/all-schools.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import {ReactiveFormsModule} from  '@angular/forms'
import { HomeService } from './home.service';
import {HttpClientModule} from '@angular/common/http';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import {NgxPaginationModule} from  'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";
import { DashboardComponent } from './dashboard/dashboard.component';
import { UniversitiesComponent } from './dashboardComponents/universities/universities.component';
import { ProgramsComponent } from './dashboardComponents/programs/programs.component';
import { FacultsComponent } from './dashboardComponents/facults/facults.component';
import { DepartmentsComponent } from './dashboardComponents/departments/departments.component';
import { SecondaryComponent } from './dashboardComponents/secondary/secondary.component';
import { UniversityDetailComponent } from './dashboardComponents/university-detail/university-detail.component';
import { ProgramDetailComponent } from './dashboardComponents/program-detail/program-detail.component';
import { FacultsDetailComponent } from './dashboardComponents/facults-detail/facults-detail.component';
import { DepartementDetailComponent } from './dashboardComponents/departement-detail/departement-detail.component';
import { SecondaryDetailComponent } from './dashboardComponents/secondary-detail/secondary-detail.component';
import { SettingsComponent } from './dashboardComponents/settings/settings.component';
import { DialogExampleComponent } from './dashboardComponents/dialog-example/dialog-example.component';
import { MatSidenavModule } from '@angular/material';






@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
   routingComponents,

    SignupComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    SchoolByLocationComponent,
    NavComponent,
    AllSchoolsComponent,
    LoginComponent,
    NotfoundComponent,
    ForgetpasswordComponent,
    SchoolDetailComponent,
    DashboardComponent,
    UniversitiesComponent,
    ProgramsComponent,
    FacultsComponent,
    DepartmentsComponent,
    SecondaryComponent,
    UniversityDetailComponent,
    ProgramDetailComponent,
    FacultsDetailComponent,
    DepartementDetailComponent,
    SecondaryDetailComponent,
    SettingsComponent,
    DialogExampleComponent,






  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule ,
    AngularFontAwesomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    MatSidenavModule



  ],
  providers: [HomeService],

  bootstrap: [AppComponent],
  entryComponents:[UniversityDetailComponent,SecondaryDetailComponent,DialogExampleComponent]

})
export class AppModule { }
