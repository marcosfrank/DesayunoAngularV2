import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

// APP MODULE
import { AppComponent } from './app.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { WelcomeComponent } from './welcome/welcome.component';

//PEOPLE MODULE
import { PersonModule } from "./people/person.module";
import { PersonListComponent } from "./people/person-list.component";

const appRoutes : Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'ejercicios', component: EjerciciosComponent},
  { path: 'people/list', component: PersonListComponent},
  { path: '', redirectTo:'welcome' ,pathMatch:'full'},
  { path: '**', redirectTo:'welcome' ,pathMatch:'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    EjerciciosComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    PersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
