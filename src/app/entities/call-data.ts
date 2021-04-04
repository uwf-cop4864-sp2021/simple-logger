
interface Callsign {
  callsign: string;
  operClass?: string;
  name?: string;
}

export interface CallData {
  status: 'VALID' | 'INVALID';
  current: Callsign;
  previous: Callsign;
  trustee: Callsign;
  name: string;
  address:{
    line1: string;
    line2: string;
    attn: string;
  },
  location: {
    latitude: string;
    longitude: string;
    gridsquare: string;
  },
  otherInfo: {
    grantDate: string;
    ulsUrl: string;
  }
}
