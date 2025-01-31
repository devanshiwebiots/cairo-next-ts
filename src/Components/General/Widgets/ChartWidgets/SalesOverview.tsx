import { Salesoverview } from "@/Constant";
import { SalesOVerview } from "@/Data/Widgets/chart/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import DashboardCommonHeader from "../../Dashboard/common/DashboardCommonHeader";

const SalesOverview = () => {
  return (
    <Col xl="6" lg="12" className="box-xol-6 xl-50">
      <Card>
        <DashboardCommonHeader title={Salesoverview} dropDownFalse={true} />
        <CardBody>
          <div className="chart-container progress-chart" id="sales-overview-2">
            <ReactApexChart options={SalesOVerview} series={SalesOVerview.series} type="line" height={320} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesOverview;
