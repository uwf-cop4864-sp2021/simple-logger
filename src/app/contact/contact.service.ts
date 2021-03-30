import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

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
   * Adds a new contact
   * @param toDelete A new contact to insert.
   * @returns Boolean indicating whether the action was successful.
   */
  public addContact(newContact: Contact): boolean {
    this.contacts.push(newContact);
    return true;
  }

  /**
   * Deletes a contact for a given number
   * @param toDelete The id of the contact that is being deleted.
   * @returns Boolean indicating whether the action was successful.
   */
  public deleteContact(toDelete: number): boolean {
    this.contacts = this.contacts.filter( c => c.id !== toDelete);
    return true;
  }
}
