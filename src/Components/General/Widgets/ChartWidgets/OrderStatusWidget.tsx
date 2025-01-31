import { Orderstatus } from "@/Constant";
import { OrderStatusCharts } from "@/Data/Widgets/chart/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import DashboardCommonHeader from "../../Dashboard/common/DashboardCommonHeader";

const OrderStatus = () => {
  return (
    <Col xl="7" lg="12" className="box-col-7">
      <Card>
        <DashboardCommonHeader title={Orderstatus} dropDownFalse={true} />
        <CardBody>
          <div className="chart-container" id="linechart">
            <ReactApexChart options={OrderStatusCharts} series={OrderStatusCharts.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderStatus;
