import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import React, {Component} from 'react'

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    // let parkMarkers = this.props.mapParks.map( (elem, idx) =>
    //   (
    //     <Marker 
    //       options={{icon: 'images/parkee-marker.png'}}
    //       onClick={this.onMarkerClick}
    //       name={'Current location'}
    //       key={idx}
    //       title={elem.properties.place}
    //       name={elem.properties.place}
    //       position={{ 
    //         lat: elem.geometry.coordinates[1], 
    //         lng: elem.geometry.coordinates[0] 
    //       }}
    //     />
    //   )
    // )

    return (
      <Map google={this.props.google} 
          zoom={14}
          onClick={this.onMapClicked}
          initialCenter={{
            lat: 37.7763614, 
            lng: -122.4357914
          }}
          // style={{width: '50%', height: '80%'}}
      >
       {/* {parkMarkers} */}

        <InfoWindow
          onClose={this.onInfoWindowClose}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}

const LoadingContainer = (props) => (
  <div >
    <img src={'images/loading.gif'} alt="Loading..."/>
  </div>
)

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg'),
  LoadingContainer: LoadingContainer
})(MapContainer)