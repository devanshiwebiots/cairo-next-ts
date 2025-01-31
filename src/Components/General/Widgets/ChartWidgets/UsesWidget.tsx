import { UserTitle } from "@/Constant";
import { UsersChart } from "@/Data/Widgets/chart/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import DashboardCommonHeader from "../../Dashboard/common/DashboardCommonHeader";

const UsesWidget = () => {
  return (
    <Col xl="7" lg="12" className="xl-50 box-col-7">
      <div className="small-chart-widget">
        <Card>
          <DashboardCommonHeader title={UserTitle} dropDownFalse={true} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col id="chart-widget9">
                  <ReactApexChart options={UsersChart} series={UsersChart.series} type="bubble" height={300} />
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default UsesWidget;
