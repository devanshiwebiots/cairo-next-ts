import { Monthlyhistory } from "@/Constant";
import { MonthlyHistoryChart } from "@/Data/Widgets/chart/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, Col, Row } from "reactstrap";
import DashboardCommonHeader from "../../Dashboard/common/DashboardCommonHeader";

const MonthlyHistory = () => {
  return (
    <Col md="12" className="box-col-12">
      <Card className="o-hidden">
        <DashboardCommonHeader title={Monthlyhistory} dropDownFalse={true} />
        <div className="bar-chart-widget">
          <div className="bottom-content card-body">
            <Row>
              <Col id="chart-widget4">
                <ReactApexChart options={MonthlyHistoryChart} series={MonthlyHistoryChart.series} type="bar" height={380} />
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default MonthlyHistory;
