import { Injectable } from '@angular/core';
import { RadioOperator } from '../entities/radio-operator';
import { Observable, of, Subject } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { CallData } from '../entities/call-data';

@Injectable({
  providedIn: 'root'
})
export class RadioOperatorService {

  // The operator we are currently talking to
  private currentContact = new Subject<RadioOperator>();

  // An observable that will updated with a new operator
  // whenever the contact changes
  public $contactChanges = this.currentContact.asObservable();

  constructor(private httpClient: HttpClient) { }

  public newContact(callsign: string): void {
    this.getRadioOperator(callsign).subscribe( (op: RadioOperator) => {
        // Send the operator to the subject so consumers can get it
        this.currentContact.next(op);
    });
  }

  public getRadioOperator(callsign: string): any {
    const url = `https://callook.info/${callsign}/json`;
    return this.httpClient.get(url)
      .pipe(
        map( (callData: CallData) => {
          // If this is a valid callsign
          if(callData.status === 'VALID') {
            // Construct a new RadioOperator object based on the call data
            return new RadioOperator(callData);
          } else {
            console.error('An error was encountered getting callsign info');
            return {} as RadioOperator;
          }
          
        }),
        catchError(this.handleError('getHeroes'))
      )
  }


    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError(operation = 'operation') {
      return (error: any) => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // Let the app keep running by returning an empty result.
        return of(new RadioOperator({} as CallData));
      };
    }
}
