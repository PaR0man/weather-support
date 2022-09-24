import { Layout, Row } from "antd";

const { Footer: AntFooter } = Layout;

export const Footer = () => {
  return (
    <AntFooter className='footer'>
      <Row align='middle' justify="end">
        <h2 className='title'>v 0.3.1</h2>
      </Row>
    </AntFooter>
  );
};
