import { Component, OnInit } from '@angular/core';
import { Person } from "./person";
import { PeopleService } from "./people.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {
  person:Person;
  constructor(private _peopleService:PeopleService,
              private _router:Router) { }

  ngOnInit() {
    this.person = new Person();
  }

  save():void {
    this._peopleService.addPerson(this.person)
      .subscribe(res => {
        console.log(res);
        alert("Has grabado una persona con exito");
        this.back();
      }, (err) => {
        alert("Ha surgido un error. Chequear la consola");
        console.log(err);
      }
    );
  }

  back() : void {
    this._router.navigate(['/people']);
  }

}
