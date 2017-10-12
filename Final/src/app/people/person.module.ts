import { NgModule } from '@angular/core';
import { PersonListComponent } from './person-list.component';
import { PersonsService } from './person.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonMoodComponent } from './shared/person-mood.component';
import { PersonDetailComponent } from './person-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'people', component: PersonListComponent},
      { path: 'people/detail/:id', component: PersonDetailComponent}
    ])
  ],
  declarations: [
    PersonListComponent,
    PersonMoodComponent,
    PersonDetailComponent
  ],
  providers: [
    PersonsService
  ],
  exports: [
    PersonListComponent
  ]
})
export class PersonModule { }
