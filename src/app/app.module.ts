import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes : Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'ejercicios', component: EjerciciosComponent},
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
