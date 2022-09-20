import  { FC } from "react";
import { Layout, Row } from "antd";
import { Input } from "antd";

const { Search } = Input;
const { Header } = Layout;

export interface HeadProps {
  setLocationName: (location: string) => void;
}

export const Head: FC<HeadProps> = ({ setLocationName }) => {
  return (
    <Header className='header'>
      <Row
        justify='space-between'
        align='middle'
        style={{
          height: "100%",
        }}
      >
        <Search
          onSearch={(value) => setLocationName(value)}
          placeholder='Enter location'
          enterButton
          className='search'
        />
        <h1 className='title'>Weather Support</h1>
      </Row>
    </Header>
  );
};
