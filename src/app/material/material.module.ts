import { NgModule } from '@angular/core';
import { MatButtonModule,
  MatPaginatorModule,
  MatButtonToggleModule, 
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatFormField,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatDialogModule,
  MatSelectModule,
  MatProgressBarModule,
  MatTableModule,
  MatSortModule,
  MatRadioModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatTooltipModule,

 
} from '@angular/material';
import {  MatBadgeModule} from '@angular/material/badge'
import {MatChipsModule} from '@angular/material/chips';

const Material=[
 MatProgressBarModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatChipsModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatDialogModule,
  MatSelectModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatRadioModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatTooltipModule
 



  
]



@NgModule({ 
  imports: [Material],
  exports:[Material]
})
export class MaterialModule { }
