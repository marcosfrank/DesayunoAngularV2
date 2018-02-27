import { NgModule } from '@angular/core';
import { PersonListComponent } from './person-list.component';
import { PeopleService } from './people.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonAddComponent } from './person-add.component';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    PersonListComponent,
    PersonAddComponent
  ],
  providers: [
    //¿Que falta aca?
  ],
  exports: [
    PersonListComponent
  ]
})
export class PersonModule { }
