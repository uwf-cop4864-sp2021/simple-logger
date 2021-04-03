import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  // Data for this component
  // It drives the html part
  public callsign = '';
  public frequency = 0.0;
  public mode = '';
  public notes = '';
  public hasError = false;

  // Valid modes, used to populate the dropdown
  public modes = ['SSB', 'CW', 'DATA'];

  // A 1-up number that I use when creating contact
  private currentId = 1;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    // Simulated event
    setTimeout(() => {
      this.frequency = 14000;
    }, 1000);
  }

  // Handle the form submission
  public logButtonClicked(event) {
    event.preventDefault();

    // Validate the data
    if (this.callsign !== '' && this.frequency > 0 && this.mode !== '') {
      console.log('we have no errors');

      // Build a new contact to send to the service
      const newContact: Contact = {
        id: this.currentId,
        callsign: this.callsign,
        frequency: this.frequency,
        mode: this.mode,
        notes: this.notes,
        time: new Date(),
      };

      console.log(newContact);

      // Send the contact
      this.contactService.addContact(newContact);

      // Increment the id for the next contact
      this.currentId++;

      this.hasError = false;
    } else {
      console.log('we have errors');
      this.hasError = true;
    }
  }
}
