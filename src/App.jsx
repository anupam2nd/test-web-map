import React from "react";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import 'leaflet/dist/leaflet.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar />
      <p className="font-semibold text-2xl">new project</p> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
