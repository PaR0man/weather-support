import { Layout } from "antd";
import { FC } from "react";
import { LocationCoord } from "../../types/locationDataType";
import { Footer } from "./footer";
import { Head } from "./header";
import { Main } from "./main";

interface ContentLayoutProps {
  locationName: string;
  setLocationName: (newLocationName: string) => void;
  locationCoord: LocationCoord;
  error?: string;
  setError: (errorMessage: string) => void;
}

export const ContentLayout: FC<ContentLayoutProps> = ({
  locationCoord,
  locationName,
  setError,
  setLocationName,
  error,
}) => {
  return (
    <Layout className='root'>
      <Head setLocationName={setLocationName} />
      <Main
        locationCoord={locationCoord}
        locationName={locationName}
        error={error}
        setError={setError}
      />
      <Footer />
    </Layout>
  );
};
