import { FinanceTitle } from "@/Constant";
import { FinanceChart } from "@/Data/Widgets/chart/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import DashboardCommonHeader from "../../Dashboard/common/DashboardCommonHeader";

const Finance = () => {
  return (
    <Col xl="5" lg="12">
      <Card>
        <DashboardCommonHeader title={FinanceTitle} dropDownFalse={true} />
        <CardBody>
          <div className="chart-container column-container" id="columnchart">
            <ReactApexChart options={FinanceChart} series={FinanceChart.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Finance;
