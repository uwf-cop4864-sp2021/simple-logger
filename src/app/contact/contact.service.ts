import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Contact } from '../entities/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // Allows us to observe the contacts as they change
  private subject = new Subject<Contact[]>();

  // Maintain my list of contacts in this app
  // TODO: need to convert this to DB for persistance
  private contacts: Contact[] = [];

  constructor() { }

  /**
   * Get all contacts
   * @returns A list of contacts
   */
  public getContacts(): Contact[] {
    return this.contacts;
  }

  /**
   * Gets contacts as an observable stream
   * @returns An observable of the contact array
   */
  public getContactsAsObservable(): Observable<Contact[]> {
    return this.subject.asObservable();
  }

  /**
   * Adds a new contact
   * @param toDelete A new contact to insert.
   * @returns Boolean indicating whether the action was successful.
   */
  public addContact(newContact: Contact): boolean {
    // Add the data to the contact array
    this.contacts.push(newContact);

    // Update the subject to send a new observable event
    this.subject.next(this.contacts);

    return true;
  }

  /**
   * Deletes a contact for a given number
   * @param toDelete The id of the contact that is being deleted.
   * @returns Boolean indicating whether the action was successful.
   */
  public deleteContact(toDelete: number): boolean {
    this.contacts = this.contacts.filter( c => c.id !== toDelete);

    // Update the subject to send a new observable event
    this.subject.next(this.contacts);

    return true;
  }
}
