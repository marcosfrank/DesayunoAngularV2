import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Person } from './person';

@Injectable()
export class PeopleService {
    private _productUrl = 'http://personasapi.azurewebsites.net/api/personas/';

    constructor(private _http: HttpClient) { }

    getAll(): Observable<Person[]> {
        return this._http.get<Person[]>(this._productUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getById(personId:number): Observable<Person> {
        return this._http.get<Person>(this._productUrl + personId.toString())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    addPerson (person: Person): Observable<Person> {
        return this._http.post<Person>(this._productUrl, person)
        .do(data => console.log('Done: ' + JSON.stringify(data)))
        .catch(
            this.handleError
        );
      }


    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}
