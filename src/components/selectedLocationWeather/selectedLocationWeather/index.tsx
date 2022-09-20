import { Col } from "antd";
import { FC } from "react";
import { SelectedLocationWeatherTypes } from "../../../types/locationDataType";
import { CurrentWeatherDetails } from "../currentWeatherDetails";
import { CurrentWeatherTitle } from "../currentWeatherTitle";
import { FutureForecast } from "../futureForecast";

export interface SelectedLocationProps {
  locationData?: SelectedLocationWeatherTypes;
  locationName: string;
}

export const SelectedLocationWeather: FC<SelectedLocationProps> = ({
  locationData,
  locationName,
}) => {
  return (
    <Col span={12} className='selectedCity'>
      <CurrentWeatherTitle
        name={locationName ? locationName : locationData?.current.timezone}
        icon={locationData?.current.icon}
      />
      <CurrentWeatherDetails locationData={locationData?.current} />

      <FutureForecast forecast={locationData?.daily} />
    </Col>
  );
};
