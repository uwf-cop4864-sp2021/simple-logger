
export interface Callsign {
  callsign: string;
  operClass?: string;
  name?: string;
}

export interface OperatorLocation {
  latitude: string;
  longitude: string;
  gridsquare: string;
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
  location: OperatorLocation,
  otherInfo: {
    grantDate: string;
    ulsUrl: string;
  }
}
