import { Stockmarket } from "@/Constant";
import { StockMarketChart } from "@/Data/Widgets/chart/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import DashboardCommonHeader from "../../Dashboard/common/DashboardCommonHeader";

const StockMarket = () => {
  return (
    <Col sm="12" className="box-col-12">
      <div className="donut-chart-widget">
        <Card>
          <DashboardCommonHeader title={Stockmarket} dropDownFalse={true} />
          <CardBody>
            <div id="chart-widget13">
              <ReactApexChart options={StockMarketChart} series={StockMarketChart.series} type="line" height={450} />
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default StockMarket;
