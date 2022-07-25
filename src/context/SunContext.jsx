import React, { useCallback, useState } from "react";

export const SunContext = React.createContext(null);
export function SunProvider(props) {
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();
  const [noon, setNoon] = useState();
  return (
    <SunContext.Provider
      value={{
        sunrise,
        setSunrise,
        sunset,
        setSunset,
        noon,
        setNoon,
      }}
    >
      {props.children}
    </SunContext.Provider>
  );
}
