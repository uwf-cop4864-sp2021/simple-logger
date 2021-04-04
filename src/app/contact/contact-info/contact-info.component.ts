import { Component, OnInit } from '@angular/core';
import { pipe, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { RadioOperator } from 'src/app/entities/radio-operator';
import { RadioOperatorService } from '../radio-operator.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  public op: RadioOperator;
  public subscription: Subscription;

  constructor(private radioOperatorService: RadioOperatorService) { }

  ngOnInit(): void {
    this.subscription = this.radioOperatorService.$contactChanges.subscribe(
      (operator: RadioOperator) => {
        this.op = operator;
      }
    )
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
