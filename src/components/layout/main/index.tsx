import { FC, useEffect, useState } from "react";
import { Layout, Row } from "antd";
import { SelectedGraph } from "../../selectedGraph";
import {
  LocationCoord,
  SelectedLocationWeatherTypes,
} from "../../../types/locationDataType";
import { SelectedLocationWeather } from "../../selectedLocationWeather/selectedLocationWeather";
import { fetchByLocation, fetchByСoord } from "../../../api/selectLocation";
import { getLocationCoords, getLocationData } from "../../../utils";

const { Content } = Layout;

export interface MainProps {
  locationName: string;
}

export const Main: FC<MainProps> = ({ locationName }) => {
  const [error, setError] = useState<string>();

  const [locationData, setLocationData] =
    useState<SelectedLocationWeatherTypes>();

  const getData = (coords: LocationCoord) => {
    fetchByСoord(coords).then((positionResponse) =>
      positionResponse.json().then((locationResponse) => {
        locationResponse.message
          ? setError(locationResponse.message)
          : setLocationData(getLocationData(locationResponse));
      })
    );
  };

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      getData(getLocationCoords(coords));
    });
  }, []);

  useEffect(() => {
    locationName &&
      fetchByLocation(locationName).then((locationResponse) =>
        locationResponse.json().then((responseData) => {
          responseData.message
            ? setError(responseData.message)
            : getData(responseData.city.coord);
        })
      );
  }, [locationName]);

  return (
    <Content className='content'>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <Row className='currentWeather'>
          <SelectedLocationWeather
            locationData={locationData}
            locationName={locationName}
          />
          <SelectedGraph hourlyForecast={locationData?.hourly} />
        </Row>
      )}
    </Content>
  );
};
