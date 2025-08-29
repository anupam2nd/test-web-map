import React, { useState } from "react";
import MapView from "../component/MapView";
import { Button } from "@headlessui/react";


export default function About() {
  const [position, setPosition] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);

      setPosition(prev => ({ ...prev, latitude, longitude }));
    });
  }



  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Map</h1>

      <Button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={getLocation}>
        My Location
      </Button>

      {/* <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Our Story</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
          mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
          neque eu tellus rhoncus ut eleifend nibh porttitor.
        </p>
        <p>
          Ut in nulla enim. Phasellus molestie magna non est bibendum non
          venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-300 mb-4"></div>
            <h3 className="font-bold">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-300 mb-4"></div>
            <h3 className="font-bold">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-300 mb-4"></div>
            <h3 className="font-bold">Mike Johnson</h3>
            <p className="text-gray-600">Lead Developer</p>
          </div>
        </div>
      </div> */}
      <div className="p-5">
        <MapView position={position} />
      </div>
    </div>
  );
}
