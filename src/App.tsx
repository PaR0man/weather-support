import { FC, useEffect, useState } from "react";
import { fetchByLocation } from "./api/selectLocation";
import { LocationCoord } from "./types/locationDataType";
import { ContentLayout } from "./components/layout";

export const App: FC = () => {
  const [locationCoord, setLocationCoord] = useState<LocationCoord>({
    lat: 0,
    lon: 0,
  });
  const [locationName, setLocationName] = useState<string>("");

  const [error, setError] = useState<string>();

  const getLocationCoord = async () => {
    const response = await fetchByLocation(locationName);
    const data = await response.json();

    if (data.message) {
      return setError(data.message);
    }
    setError("");

    setLocationCoord({
      lat: data.city.coord.lat,
      lon: data.city.coord.lon,
    });
  };

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) =>
      setLocationCoord({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      })
    );
  }, []);

  useEffect(() => {
    if (locationName) {
      getLocationCoord();
    }
  }, [locationName]);

  return (
    <ContentLayout
      locationName={locationName}
      setLocationName={setLocationName}
      locationCoord={locationCoord}
      error={error}
      setError={setError}
    />
  );
};

export default App;
