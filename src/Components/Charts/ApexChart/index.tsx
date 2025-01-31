import { Container, Row } from "reactstrap";
import BubbleChart3D from "./3dBubbleChart";
import AreaSpalineChart from "./AreaSpalineChart";
import BarChart from "./BarChart";
import BasicAreaChart from "./BasicAreaChart";
import CandlestickChart from "./CandlestickChart";
import ColumnChart from "./ColumnChart";
import ColumnChartTwo from "./ColumnChartTwo";
import DonutChart from "./DonutChart";
import MixedChart from "./MixedChart";
import PieChart from "./PieChart";
import RadarChart from "./RadarChart";
import RadialBarChart from "./RadialBarChart";
import SteplineChart from "./SteplineChart";

const ApexChartContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicAreaChart />
        <AreaSpalineChart />
        <BarChart />
        <ColumnChart />
        <BubbleChart3D />
        <SteplineChart />
        <ColumnChartTwo />
        <PieChart />
        <DonutChart />
        <MixedChart />
        <CandlestickChart />
        <RadarChart />
        <RadialBarChart />
      </Row>
    </Container>
  );
};

export default ApexChartContainer;
