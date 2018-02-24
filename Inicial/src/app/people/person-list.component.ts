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
        // this.{{SERVICIO}}.getAll()
        // .subscribe(response => {
        //         this.people = response;
        //         this.filteredPeople = this.people;
        //     },
        //     error => console.log("Ha surgido un error." + error)
        // ); 
    }

    performFilter(): void {
        // if(this.filter!== ""){
        //     let filterBy = this.filter.toLocaleLowerCase();
        //     this.filteredPeople =  this.people.filter((person: IPerson) =>
        //           person.Nombre.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        //           person.Direccion.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        //           person.Edad.toString().indexOf(filterBy) !== -1);
        // }else{
        //     this.filteredPeople = this.people;
        // }
        
    }

}
