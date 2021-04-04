import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/entities/contact';
import { ContactService } from '../contact.service';
import { RadioOperatorService } from '../radio-operator.service';

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

  constructor(
    private contactService: ContactService,
    private radioOperatorService: RadioOperatorService
  ) {}

  ngOnInit(): void {
    // Simulated event - frequency from radio
    setTimeout(() => {
      this.frequency = 14000;
    }, 1000);
  }

  // Called whenever the callsign is updated on the form
  public callsignChanged() {
    // Publish these changes to the radio operator service
    this.radioOperatorService.newContact(this.callsign);
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

      // Send the contact
      this.contactService.addContact(newContact);

      // Increment the id for the next contact
      this.currentId++;

      // Clear the form fields to prepare for the next item
      // (Leave the frequency in place for the next contact.)
      this.callsign = '';
      this.mode = '';
      this.notes = '';

      this.hasError = false;
    } else {
      console.log('we have errors');
      this.hasError = true;
    }
  }
}
