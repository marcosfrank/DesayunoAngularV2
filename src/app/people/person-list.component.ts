import { Component, OnInit } from '@angular/core';
import { IPerson } from './person';
import { PersonsService } from './person.service';

@Component({
    templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {

    show: Boolean = true;
    public filteredPeople: IPerson[];
    people: IPerson[] = [];

    constructor(private _peopleService: PersonsService) {

    }

    // onRatingClicked(message: string): void {
    //     this.pageTitle = 'People List: ' + message;
    // }

    performFilter(filterBy: string): IPerson[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.people.filter((person: IPerson) =>
              person.Nombre.toLocaleLowerCase().indexOf(filterBy) !== -1);
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
}
