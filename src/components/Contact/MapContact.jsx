import React, { Component } from 'react';
//google map api
import { Map, GoogleApiWrapper,InfoWindow, Marker } from 'google-maps-react';
//components
import MapStyle from "../../mapStyle";

const mapStyles = {
  width: '500px',
  height: '400px',
  position: 'relative'
};

export class MapContact extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

  render() {
    return (
      <div className="map">
      <Map
        google={this.props.google}
        zoom={18}
        mapId="17ee4f6cc09b12e9"
        style={mapStyles}
        styles={MapStyle}

        initialCenter={
          {
            lat: 53.43180,
            lng: 14.54890
          }
        }
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Emilio Restaurant'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
      </div>
      
    );
  }
}

export default GoogleApiWrapper(
  (props)=>({
  apiKey: 'AIzaSyBshFT3cUm9nZUge1ZoO4aYKn4FReFU0Bc'
}))(MapContact);
