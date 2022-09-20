import { Col, Typography } from "antd";
import { FC } from "react";
import { Bar, CartesianGrid, ComposedChart, XAxis, YAxis } from "recharts";
import { IHourlyForecast } from "../../types/locationDataType";

const { Title } = Typography;

interface SelectedGraphData {
  hourlyForecast?: IHourlyForecast[];
}

export const SelectedGraph: FC<SelectedGraphData> = ({ hourlyForecast }) => {
  return (
    <Col span={12} className='selectedGraph'>
      <Title level={1}>Location Graph</Title>
      <ComposedChart
        data={hourlyForecast?.slice(0, 12)}
        width={600}
        height={400}
      >
        <XAxis dataKey='dt' />
        <YAxis dataKey='temp' />
        <CartesianGrid stroke='#48484a' />
        <Bar dataKey='temp' barSize={20} fill='#e96e50' />
      </ComposedChart>
    </Col>
  );
};
