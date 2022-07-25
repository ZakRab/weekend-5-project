import useAxiosLoc from "./hooks/useAxiosLoc";
import React, { useState, useContext } from "react";
import { LocationContext } from "./context/LocationContext";

function App() {
  const { data, error } = useAxiosLoc();
  const { setLocation, location } = useContext(LocationContext);
  console.log(data);
  return (
    <>
      <label htmlFor="locationInput">Enter your location</label>
      <input
        id="locationInput"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      ></input>
      {data &&
        data.map((val) => {
          {
            console.log(val.latitude, val.longitude);
          }
          <p>{val.address}</p>;
        })}
      <p>test</p>
    </>
  );
}

export default App;
