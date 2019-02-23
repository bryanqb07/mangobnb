import React from 'react';

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 25.046168, lng: 121.5157507 }, 
            zoom: 15
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        new google.maps.Marker({
            position: mapOptions.center,
            map: this.map,
        });
    }

    render() {
        return (
            <div className="map-section">
                <h1>Our Location</h1>
                <div id="map-container" ref={map => this.mapNode = map}>
                </div>
            </div>
        )
    }
}

export default Map;