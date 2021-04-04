import { CallData } from '../entities/call-data';

export class RadioOperator {
  callsign: string;
  name: string;
  address1: string;
  address2: string;
  latitude: string;
  longitude: string;
  gridsquare: string;
  url: string;

  // Build a radio operator from call data
  constructor(c: CallData) {
    this.callsign = c.current.callsign;
    this.name =  c.name;
    this.address1 =  c.address.line1;
    this.address2 =  c.address.line2;
    this.latitude =  c.location.latitude;
    this.longitude =  c.location.longitude;
    this.gridsquare =  c.location.gridsquare;
    this.url =  c.otherInfo.ulsUrl;
  }

}