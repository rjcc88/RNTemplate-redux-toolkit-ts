import { MapContainer, TileLayer } from "react-leaflet";
// import "../Map/leaflet/leaflet.css";

import LeafletFileLayer from "./LeafletFileLayer";
// import React from "react";

export default Maps=()=> {
  const position = [51.505, -0.09];

  return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      <LeafletFileLayer />
    </MapContainer>
  );
}
