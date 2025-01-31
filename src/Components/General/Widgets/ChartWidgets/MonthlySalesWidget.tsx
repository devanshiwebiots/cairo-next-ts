import { Monthlysales } from "@/Constant";
import { MontlySaleChart } from "@/Data/Widgets/chart/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import DashboardCommonHeader from "../../Dashboard/common/DashboardCommonHeader";

const MonthlySales = () => {
  return (
    <Col xl="5" lg="12" className="xl-50 box-col-5">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <DashboardCommonHeader title={Monthlysales} dropDownFalse={true} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col id="chart-widget8">
                  <ReactApexChart options={MontlySaleChart} series={MontlySaleChart.series} type="radar" height={300} />
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default MonthlySales;
