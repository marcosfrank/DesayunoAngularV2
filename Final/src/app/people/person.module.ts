import { NgModule } from '@angular/core';
import { PersonListComponent } from './person-list.component';
import { PeopleService } from './people.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonMoodComponent } from './shared/person-mood.component';
import { PersonDetailComponent } from './person-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { PersonAddComponent } from './person-add.component';

const routes : Routes = [
    { path: 'people', component: PersonListComponent},
    { path: 'people/detail/:id', component: PersonDetailComponent},
    { path: 'people/add', component: PersonAddComponent},
];

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PersonListComponent,
    PersonMoodComponent,
    PersonDetailComponent,
    PersonAddComponent
  ],
  providers: [
    PeopleService
  ],
  exports: [
    PersonListComponent
  ]
})
export class PersonModule { }
