// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";
// import React, { useEffect } from "react";
// import "leaflet-routing-machine";

// // Fix for default marker icons not showing in React
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });

// var myIcon = L.icon({
//   iconUrl: "/images/home-button.png",
//   iconSize: [40, 40], // actual rendered size (try 32–48px range)
//   iconAnchor: [20, 40], // tip of the icon (x = half width, y = full height)
//   popupAnchor: [0, -40], // popup appears just above the icon
//   shadowUrl: "/images/my-icon-shadow.png",
//   shadowSize: [50, 50], // slightly larger than icon
//   shadowAnchor: [25, 50], // align shadow with the base of the icon
// });

// export default function MapView({
//   position = { latitude: 51.505, longitude: -0.09 },
// }) {
//   useEffect(() => {
//     if (position) {
//       console.log("Current Position:", position);
//     }
//   }, [position]);

//   return (
//     <>
//       {position?.latitude && position?.longitude ? (
//         <MapContainer
//           // center={[51.505, -0.09]} // Latitude & Longitude
//           center={[position?.latitude, position?.longitude]}
//           zoom={16}
//           style={{ height: "80vh", width: "100%" }}
//         >
//           {/* Base Map Layer (OpenStreetMap free tiles) */}
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />

//           {/* Example Marker */}
//           {/* <Marker
//             position={[position?.latitude, position?.longitude]}
//             icon={myIcon}
//           >
//             <Popup>My location</Popup>
//           </Marker> */}
//           <RoutingControl />
//         </MapContainer>
//       ) : null}
//     </>
//   );
// }

// function RoutingControl() {
//   const map = useMap();

//   useEffect(() => {
//     if (!map) return;

//     const control = L.Routing.control({
//       waypoints: [
//         L.latLng(22.5700809,88.4368743),   // London
//         L.latLng(22.5672445,88.4361674),    // Another point
//         L.latLng(22.5746242,88.4339117)     // Another point
//       ],
//       lineOptions: {
//         styles: [{ color: "blue", weight: 4 }]
//       },
//       router: L.Routing.osrmv1({
//         serviceUrl: "https://router.project-osrm.org/route/v1", // public demo server
//       }),
//       showAlternatives: true,
//       altLineOptions: {
//         styles: [{ color: "gray", weight: 2, dashArray: "5,5" }]
//       }
//     }).addTo(map);

//     return () => map.removeControl(control);
//   }, [map]);

//   return null;
// }

import { MapContainer, TileLayer, MapConsumer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import L from "leaflet";

export default function MapView() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Routing logic here */}
      <MapConsumer>
        {(map) => {
          L.Routing.control({
            waypoints: [
              L.latLng(51.505, -0.09),
              L.latLng(51.515, -0.1),
              L.latLng(51.52, -0.12),
            ],
            lineOptions: { styles: [{ color: "blue", weight: 4 }] },
            router: L.Routing.osrmv1({
              serviceUrl: "https://router.project-osrm.org/route/v1",
            }),
          }).addTo(map);

          return null;
        }}
      </MapConsumer>
    </MapContainer>
  );
}
