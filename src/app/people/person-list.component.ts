import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IPerson } from './person';
import { PersonsService } from './person.service';

@Component({
    templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {
    filter: string = "";
    public filteredPeople: IPerson[];
    people: IPerson[] = [];

    constructor(private _peopleService: PersonsService) {

    }
    ngOnInit(): void {
        this._peopleService.getAll()
            .subscribe(response => {
                    this.people = response;
                    this.filteredPeople = this.people;
                },
                error => console.log("Ha surgido un error." + error)
            );
    }


    onRatingClicked(message: string): void {
        alert(message);
    }

    performFilter(): void {
        if(this.filter!== ""){
            let filterBy = this.filter.toLocaleLowerCase();
            this.filteredPeople =  this.people.filter((person: IPerson) =>
                  person.Nombre.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
                  person.Direccion.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
                  person.Edad.toString().indexOf(filterBy) !== -1);
        }else{
            this.filteredPeople = this.people;
        }
    }
}
