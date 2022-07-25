import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { LocationContext } from "../context/LocationContext";

export default function useAxiosLoc() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { setLocation, location } = useContext(LocationContext);
  const axios = require("axios");
  const baseUrl =
    "https://api.myptv.com/geocoding/v1/locations/by-text?searchText=";
  const apiKey =
    "&apiKey=NTM2ZmJlZmJhYjAyNGMwNTk0Yjc3N2E5ZDgwYWEwZmM6MzQyMGQ1NDMtYmJlOC00NDczLThmZjQtM2E0ZDFkMDkwY2Nh";
  useEffect(() => {
    async function init() {
      if (location.length === 0) {
        return;
      }
      setData(null);
      setError(null);
      try {
        const response = await axios.get(baseUrl + location + apiKey);
        console.log(response.data);
        setData(
          response.data.locations.map((val) => ({
            address: val.address.city,
            latitude: val.referencePosition.latitude,
            longitude: val.referencePosition.longitude,
          }))
        );
      } catch (e) {
        console.log(e);
        setError(e);
      }
    }
    init();
  }, [location]);

  return { data, error };
}
