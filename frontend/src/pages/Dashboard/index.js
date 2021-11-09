import React, { useState, useEffect, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";

import Header from "../../components/Header";
import { Container } from "./styles";

import { Popup, Marker, TileLayer, useMapEvents } from "react-leaflet";

import StyledPopUp from "../../components/MapPopUp";
import { StyledMap } from "./styles";

const Dashboard = () => {
  const [position, setPosition] = useState(null);
  const [devs, setDevs] = useState([]);
  const history = useHistory();

  const handleSubmit = useCallback(async (data) => {
    history.push("/devProfile");
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setPosition({ lat: latitude, lng: longitude });
      },
      () => {
        return "Oops! Algo deu errado";
      },
      {
        timeout: 30000,
        enableHighAccuracy: true,
      }
    );
  }, []);

  function LocationMarker() {
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return devs === null ? null : (
      <>
        {devs.map((dev) => {
          return (
            <Marker
              key={dev.user.id}
              position={{ lat: dev.coordinates[1], lng: dev.coordinates[0] }}
            >
              <Popup>
                <StyledPopUp data={dev} />
              </Popup>
            </Marker>
          );
        })}
      </>
    );
  }

  return (
    <Container>
      <Header setDevs={setDevs} position={position} />
      <StyledMap center={[50.5, 30.5]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </StyledMap>
    </Container>
  );
};

export default Dashboard;
