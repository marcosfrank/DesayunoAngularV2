import { Component, OnInit } from '@angular/core';
import { IPerson } from './person';
// import { PersonsService } from './person.service';

@Component({
    templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {
    pageTitle: string = 'People List';
    
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredPeople = this.listFilter ? this.performFilter(this.listFilter) : this.people;
    }

    filteredPeople: IPerson[];
    people: IPerson[] = [];

    // constructor(private _peopleService: PersonsService) {

    // }

    onRatingClicked(message: string): void {
        this.pageTitle = 'People List: ' + message;
    }

    performFilter(filterBy: string): IPerson[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.people.filter((person: IPerson) =>
              person.Nombre.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
        // this._peopleService.getAll()
        //         .subscribe(response => {
        //                 this.people = response;
        //                 this.filteredPeople = this.people;
        //             },
        //             error => console.log("Ha surgido un error." + error)
        //         );
    }
}
