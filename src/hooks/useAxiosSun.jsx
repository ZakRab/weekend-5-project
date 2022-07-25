import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { LocationContext } from "../context/LocationContext";
import { SunContext } from "../context/SunContext";

export default function useAxiosLoc() {
  const [locData, setLocData] = useState(null);
  const [error, setError] = useState(null);
  const { setLocation, location, latitude, longitude } =
    useContext(LocationContext);
  const { setSunrise, setSunset, setNoon } = useContext(SunContext);
  const axios = require("axios");
  const baseUrl = "https://api.sunrise-sunset.org/json?";
  const urlLat = "lat=" + latitude;
  const urlLng = "&lng=" + longitude;
  console.log(latitude, longitude);
  useEffect(() => {
    async function init() {
      setLocData(null);
      setError(null);
      try {
        const response = await axios.get(baseUrl + urlLat + urlLng);
        console.log(response.data);
        setSunrise(response.data.results.sunrise);
        setSunset(response.data.results.sunset);
        setNoon(response.data.results.solar_noon);
      } catch (e) {
        console.log(e);
        setError(e);
      }
    }
    init();
  }, [urlLat, urlLng]);

  return { locData, error };
}
