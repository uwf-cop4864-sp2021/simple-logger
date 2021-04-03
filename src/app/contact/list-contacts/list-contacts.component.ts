import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit, OnDestroy {

  public contacts: Contact[] = [];

  private subscription: Subscription;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

    this.subscription = this.contactService.getContactsAsObservable().subscribe( updatedContacts => {
      console.log('got new contacts');
      console.log(updatedContacts);
      this.contacts = updatedContacts;
    });
  }

  ngOnDestroy(): void {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
