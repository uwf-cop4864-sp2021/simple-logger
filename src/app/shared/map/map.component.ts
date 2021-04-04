import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { Observable, Subscription } from 'rxjs';
import { OperatorLocation } from 'src/app/entities/call-data';


const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;

  @Input()
  public locationChanges: Observable<OperatorLocation>;

  public locationSub: Subscription;

  private currentMarker: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 30.5421377, -87.2551843 ],
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    this.map.invalidateSize();
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnInit(): void {
    // Subscribe to location changes and place a new pin
    this.locationSub = this.locationChanges.subscribe(
      (location: OperatorLocation) => {
        if(location.latitude && location.longitude) {
          this.clearMap();
          // Info is stored in strings up to this point, need to convert to int for leaflet
          this.placeMarker(parseFloat(location.latitude), parseFloat(location.longitude));        }
      }
    )
  }

  ngOnDestroy(): void {
    if(this.locationSub) {
      this.locationSub.unsubscribe();
    }
  }

  // Places a marker on the map
  private placeMarker(latitude: number, longitude: number) {
    this.currentMarker = L.marker([latitude, longitude]).addTo(this.map);
    this.map.panTo(this.currentMarker.getLatLng());
  }

  // Removes all layers, markers and otherwise from the map
  private clearMap() {
    if(this.currentMarker) {
      this.map.removeLayer(this.currentMarker);
    }
  }

  
}