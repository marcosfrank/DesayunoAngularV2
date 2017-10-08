import { NgModule } from '@angular/core';
import { PersonListComponent } from './person-list.component';
import { PersonsService } from './person.service';

@NgModule({
  imports: [
  ],
  declarations: [
    PersonListComponent,
  ],
  providers: [
    PersonsService
  ],
  exports: [
    PersonListComponent
  ]
})
export class PersonModule { }
