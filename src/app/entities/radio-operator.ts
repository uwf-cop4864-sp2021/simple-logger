import { CallData, OperatorLocation } from '../entities/call-data';

export class RadioOperator {
  callsign: string;
  name: string;
  address1: string;
  address2: string;
  location: OperatorLocation;
  url: string;

  // Build a radio operator from call data
  constructor(c: CallData) {
    this.callsign = c.current.callsign;
    this.name =  c.name;
    this.address1 =  c.address.line1;
    this.address2 =  c.address.line2;
    this.location =  c.location;
    this.url =  c.otherInfo.ulsUrl;
  }

}