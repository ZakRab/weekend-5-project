import React, { useCallback, useState } from "react";

export const LocationContext = React.createContext(null);
export function LocationProvider(props) {
  const [location, setLocation] = useState("washington");
  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {props.children}
    </LocationContext.Provider>
  );
}
