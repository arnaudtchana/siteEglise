import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Maps extends Component {
    constructor(props){
        super(props)
        this.state = {
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 11
        };
    }


    render() {
        return (
            // Important! Always set the container height explicitly
            <div className="col-md-offset-2 col-md-8 text-center" style={{ height: '400px',marginBottom:50}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBEu-K1tKPa_JBaPT3nTlD4i8c5wSoZky4" }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Maps;