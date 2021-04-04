import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { OperatorLocation } from 'src/app/entities/call-data';
import { RadioOperator } from 'src/app/entities/radio-operator';
import { RadioOperatorService } from '../radio-operator.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  public op: RadioOperator;
  public opSub: Subscription; // Subscription to the radio operator

  private locationSubject = new Subject<OperatorLocation>();
  public $locationChanges = this.locationSubject.asObservable();

  constructor(private radioOperatorService: RadioOperatorService) { }

  ngOnInit(): void {
    this.opSub = this.radioOperatorService.$contactChanges.subscribe(
      (operator: RadioOperator) => {
        this.op = operator;
        this.locationSubject.next(this.op.location);
      }
    )
  }

  ngOnDestroy(): void {
    if(this.opSub) {
      this.opSub.unsubscribe();
    }
  }

}
