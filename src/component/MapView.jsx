import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import React, { useEffect } from "react";

// Fix for default marker icons not showing in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

var myIcon = L.icon({
  iconUrl: "/images/home-button.png",
  iconSize: [40, 40], // actual rendered size (try 32–48px range)
  iconAnchor: [20, 40], // tip of the icon (x = half width, y = full height)
  popupAnchor: [0, -40], // popup appears just above the icon
  shadowUrl: "/images/my-icon-shadow.png",
  shadowSize: [50, 50], // slightly larger than icon
  shadowAnchor: [25, 50], // align shadow with the base of the icon
});

export default function MapView({
  position = { latitude: 51.505, longitude: -0.09 },
}) {
  useEffect(() => {
    if (position) {
      console.log("Current Position:", position);
    }
  }, [position]);

  return (
    <>
      {position?.latitude && position?.longitude ? (
        <MapContainer
          // center={[51.505, -0.09]} // Latitude & Longitude
          center={[position?.latitude, position?.longitude]}
          zoom={16}
          style={{ height: "80vh", width: "100%" }}
        >
          {/* Base Map Layer (OpenStreetMap free tiles) */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Example Marker */}
          <Marker
            position={[position?.latitude, position?.longitude]}
            icon={myIcon}
          >
            <Popup>My location</Popup>
          </Marker>
        </MapContainer>
      ) : null}
    </>
  );
}
