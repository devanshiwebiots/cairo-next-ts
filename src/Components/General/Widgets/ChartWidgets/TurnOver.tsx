import { Turnover } from "@/Constant";
import { TurnOverChart } from "@/Data/Widgets/chart/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import DashboardCommonHeader from "../../Dashboard/common/DashboardCommonHeader";

const TurnOver = () => {
  return (
    <Col xl="5" lg="12" className="xl-50">
      <Card>
        <DashboardCommonHeader title={Turnover} dropDownFalse={true} />
        <CardBody>
          <div className="chart-container">
            <Row>
              <Col id="chart-widget7">
                <ReactApexChart options={TurnOverChart} series={TurnOverChart.series} type="area" height={320} />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TurnOver;
