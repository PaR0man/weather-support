import { Layout } from "antd";
import { FC, useState } from "react";
import { Footer } from "./footer";
import { Head } from "./header";
import { Main } from "./main";

export const ContentLayout: FC = () => {
  const [locationName, setLocationName] = useState<string>("");

  return (
    <Layout className='root'>
      <Head setLocationName={setLocationName} />
      <Main locationName={locationName} />
      <Footer />
    </Layout>
  );
};
