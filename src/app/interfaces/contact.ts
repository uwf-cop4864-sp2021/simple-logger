export interface Contact {
  id: number;        // A 1-up number designating the contact
  callsign: string;  // Callsign of the person we contacted
  mode: string;      // Radio mode of the contact
  frequency: number; // Contact frequency in khz
  notes: string;     // Notes about the contact
  time: Date;        // Time the contact was made
}
