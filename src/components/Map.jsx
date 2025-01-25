import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default Leaflet marker icon issue in React
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = defaultIcon;

const MapComponent = () => {
  const position = [6.5315, 3.3929]; // Latitude and Longitude for Oworonshoki, Lagos

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "400px", width: "100%", borderRadius: "8px" }}
    >
      {/* Tile Layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marker */}
      <Marker position={position}>
        <Popup>
          <h3>6, Idera Street</h3>
          <p>Oworonshoki, Lagos State, Nigeria</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
