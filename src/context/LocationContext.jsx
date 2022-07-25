import React, { useCallback, useState } from "react";

export const LocationContext = React.createContext(null);
export function LocationProvider(props) {
  const [location, setLocation] = useState("washington");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation,
        longitude,
        latitude,
        setLatitude,
        setLongitude,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
}
