import { Component, OnInit } from '@angular/core';
import { IPerson } from "./person";
import { PeopleService } from "./people.service";

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {
  
  constructor(private _peopleService:PeopleService) { }

  ngOnInit() {
  }

  save():void {
    var person:IPerson = {
      ID: 0,
      Nombre: "Lucas García",
      Direccion: "Av. Pellegrini 182",
      Edad:15,
      Humor:6
    };
   
    this._peopleService.addPerson(person)
      .subscribe(res => {
        console.log(res);
        alert("exito");
      }, (err) => {
        alert("error");
        console.log(err);
      }
    );
    
  }

}
