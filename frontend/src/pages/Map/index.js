import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const FreelasMap = () => {
  return (
    <Map center={[-21.2566016, -48.5186373]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-21.2566016, -48.5186373]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};
export default FreelasMap;
