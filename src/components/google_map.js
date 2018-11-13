import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            centre: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    
    render() {
        return <div ref="map" />; 
        //ref is a reference method in react. using "this.refs.map". You can use it to reference directly to this div.
    }
}

export default GoogleMap;