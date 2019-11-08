import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import leaflet from 'leaflet'; 

import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder'; 
//import { NativeGeocoder, NativeGeocoderResult,NativeGeocoderReverseResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
// NativeGeocoderReverseResult, NativeGeocoderForwardResult
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapContainer: ElementRef;
  lat: any;
  long: any;
  reservaciones:any;
  loading: any;
  client:any;
  map: any;
  datos : any;
  marker: any;
  markerGroup: any;

  constructor(public navCtrl: NavController,  private nativeGeocoder: NativeGeocoder ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiciosPage');
    this.loadmap();
  }

  ionViewDidEnter() {
    //this.loadmap();
  }
 
  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}', {
      attributions: 'google',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 15
    }).on('locationfound', (e) => {
      this.markerGroup = leaflet.featureGroup();
      this.direcciones(e.latitude, e.longitude)
      this.marker = leaflet.marker([e.latitude, e.longitude],{draggable:true}).on('click', (e) => {
        //alert("latitud: "+e.latlng.lat+"---- Longitud: "+e.latlng.lng);
        alert("Direccion tomada");
        this.map.removeLayer(this.marker);
        this.marker= leaflet.marker([e.latlng.lat, e.latlng.lng],{draggable:false});
        this.map.addLayer(this.marker);
        this.direcciones(e.latlng.lat, e.latlng.lng);
      })
      this.markerGroup.addLayer(this.marker);
      this.map.addLayer(this.markerGroup);
      }).on('locationerror', (err) => {
        alert(err.message);
    })
  }

  direcciones(lat,long){
    this.lat=lat;
    this.long=long;
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lat, long, options)
      .then((result: NativeGeocoderReverseResult[]) => this.escribirDirecciones(result[0]))
      .catch((error: any) => console.log(error));

  } 	

  putLatLong(){
    let direccion=this.datos.get('calle').value+" "+this.datos.get('fracc').value+","+this.datos.get('cp').value+","+this.datos.get('estado').value+","+this.datos.get('municipio').value+","+this.datos.get('pais').value;   
    this.getLatLong(direccion);
  }

  getLatLong(direccion){
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.forwardGeocode(direccion, options)
      .then((coordinates: NativeGeocoderForwardResult[]) => this.ponerMarker(coordinates[0].latitude,coordinates[0].longitude))
      .catch((error: any) => console.log(error));

  } 

  ponerMarker(lat, long){
    this.map.removeLayer(this.marker);
    this.marker = leaflet.marker([lat, long],{draggable:true}).on('click', (e) => {
      //alert("latitud: "+e.latlng.lat+"---- Longitud: "+e.latlng.lng);
      alert("Direccion tomada");
      this.map.removeLayer(this.marker);
      this.marker= leaflet.marker([e.latlng.lat, e.latlng.lng],{draggable:false});
      this.map.addLayer(this.marker);
      this.direcciones(e.latlng.lat, e.latlng.lng);
    })
    this.markerGroup.addLayer(this.marker);  
    this.map.addLayer(this.markerGroup);  
    this.centerLeafletMapOnMarker();
  }

  escribirDirecciones(datosDir){   
    this.datos.get('calle').setValue(datosDir.thoroughfare+" "+datosDir.subThoroughfare);
    this.datos.get('fracc').setValue(datosDir.subLocality);
    this.datos.get('cp').setValue(datosDir.postalCode);
    this.datos.get('estado').setValue(datosDir.administrativeArea);
    this.datos.get('municipio').setValue(datosDir.locality);
    this.datos.get('pais').setValue(datosDir.countryName);
    //datosDir.thoroughfare+" "+datosDir.subThoroughfare+", "+datosDir.subLocality+", "+datosDir.postalCode+" "+datosDir.administrativeArea+", "+datosDir.locality+", "+datosDir.countryName
  }

  centerLeafletMapOnMarker() {
    var latLngs = [ this.marker.getLatLng() ];
    var markerBounds = leaflet.latLngBounds(latLngs);
    this.map.fitBounds(markerBounds);
  }


}
