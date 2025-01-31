import { Liveproduct } from "@/Constant";
import { LiveproductsChart } from "@/Data/Widgets/chart/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import DashboardCommonHeader from "../../Dashboard/common/DashboardCommonHeader";

const LiveProducts = () => {
  return (
    <Col xl="7" lg="12" className="xl-50">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <DashboardCommonHeader title={Liveproduct} dropDownFalse={true} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col id="chart-widget6">
                  <ReactApexChart options={LiveproductsChart} series={LiveproductsChart.series} type="area" height={320} />
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default LiveProducts;
