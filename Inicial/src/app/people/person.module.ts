import { NgModule } from '@angular/core';
import { PersonListComponent } from './person-list.component';
import { PersonsService } from './person.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    PersonListComponent
  ],
  providers: [
    //¿Que falta aca?
  ],
  exports: [
    PersonListComponent
  ]
})
export class PersonModule { }
