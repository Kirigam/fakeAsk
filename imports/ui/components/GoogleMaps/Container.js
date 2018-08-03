import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA8-LHn_g9VR-FLdIfVrwpaN47C5MvEBWI",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => <GoogleMap
    defaultZoom={2}
    defaultCenter={props.markerPosition}
  >
    {props.isMarkerShown && <Marker position={props.markerPosition} />}
</GoogleMap> 
);

export default MyMapComponent;