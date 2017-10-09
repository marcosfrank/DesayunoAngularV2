import { NgModule } from '@angular/core';
import { PersonListComponent } from './person-list.component';
import { PersonsService } from './person.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonMoodComponent } from './shared/person-mood.component';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    PersonListComponent,
    PersonMoodComponent
  ],
  providers: [
    PersonsService
  ],
  exports: [
    PersonListComponent
  ]
})
export class PersonModule { }
