import React from "react";
import { Layout, Row } from "antd";

const { Footer: AntFooter } = Layout;

export const Footer = () => {
  return (
    <AntFooter className='footer'>
      <Row align='middle' justify="end">
        <h2 className='title'>v 0.2</h2>
      </Row>
    </AntFooter>
  );
};
