import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

  render() {
    return (
      <div>
      <Map 
      google={this.props.google} 
      zoom={2} 
      style={{width: '98.5%', height: 250}}
      initialCenter={{
        lat:28,
        lng: 1
      }}>
      <Marker
       title={this.props.countryZero + ', primeiro país no índice, com: ' + this.props.casesZero + ' de casos registrados;'}
       position={{lat: this.props.latZero, lng: this.props.longZero}} />
       <Marker
       title={this.props.countryOne + ', segundo país no índice, com: ' + this.props.casesOne + ' de casos registrados;'}
       position={{lat: this.props.latOne, lng: this.props.longOne}} />
       <Marker
       title={this.props.countryTwo + ', terceiro país no índice, com: ' + this.props.casesTwo + ' de casos registrados;'}
       position={{lat: this.props.latTwo, lng: this.props.longTwo}} />
       <Marker
       title={this.props.countryThree + ', quarto país no índice, com: ' + this.props.casesThree + ' de casos registrados;'}
       position={{lat: this.props.latThree, lng: this.props.longThree}} />
       <Marker
       title={this.props.countryFour + ', quinto país no índice, com: ' + this.props.casesFour + ' de casos registrados;'}
       position={{lat: this.props.latFour, lng: this.props.longFour}} />
      </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('Aqui vai sua API key')
})(MapContainer)