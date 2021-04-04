import { TestBed } from '@angular/core/testing';
import { Contact } from '../entities/contact';

import { ContactService } from './contact.service';

describe('ContactService', () => {
  let service: ContactService;

  let testContact: Contact;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactService);
  });

  beforeAll(() => {
    // Init the test contact
    testContact = {
      id: 1,
      callsign: 'N4XAE',
      frequency: 12345.0,
      mode: 'SSB',
      notes: 'Syracuse, NY',
      time: new Date(),
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a contact', () => {
    // First, check that there aren't any contacts
    const contactsBefore = service.getContacts();
    expect(contactsBefore.length).toEqual(0);

    // Add the contact
    const result = service.addContact(testContact);
    expect(result).toBe(true);

    // Last, make sure that a contact was added
    const contactsAfter = service.getContacts();
    expect(contactsAfter.length).toEqual(1);
  });

  it('should delete a contact', () => {
    // First, check that there aren't any contacts
    const contactsBefore = service.getContacts();
    expect(contactsBefore.length).toEqual(0);

    // Add the contact (that will be deleted)
    const result1 = service.addContact(testContact);
    expect(result1).toBe(true);

    // Delete that contact
    const result2 = service.deleteContact(1);
    expect(result2).toBe(true);

    // Last, make sure that a contact was delete
    const contactsAfter = service.getContacts();
    expect(contactsAfter.length).toEqual(0);
  });
});
