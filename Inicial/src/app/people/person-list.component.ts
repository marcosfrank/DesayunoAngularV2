import { Component, OnInit } from '@angular/core';


@Component({
    templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {
    filter: string = "";
    // public filteredPeople: IPerson[];
    // people: IPerson[] = [];

    constructor() {
        
    }
    ngOnInit(): void {
        
    }

    performFilter(): void {
        //Esta funcion se encarga de generar el filtro de la grilla.
    }

}
