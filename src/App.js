import useAxiosLoc from "./hooks/useAxiosLoc";
import React, { useState, useContext } from "react";
import { LocationContext } from "./context/LocationContext";
import useAxiosSun from "./hooks/useAxiosSun";
import { SunContext } from "./context/SunContext";

function App() {
  const { data, error } = useAxiosLoc();
  const { locData } = useAxiosSun();
  const { setLocation, location } = useContext(LocationContext);
  const { sunrise, sunset, noon } = useContext(SunContext);
  data && console.log(data);
  locData && console.log(locData);
  return (
    <>
      <label htmlFor="locationInput">Enter your location</label>
      <input
        id="locationInput"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      ></input>
      <div>sunrise: {sunrise}</div>
      <div>sunset: {sunset}</div>
      <div>solar noon: {noon}</div>
    </>
  );
}

export default App;
