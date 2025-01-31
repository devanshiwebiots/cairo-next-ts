import { Card, CardBody, Col } from "reactstrap";
import { Chart } from "react-google-charts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ColumnChartOne } from "@/Constant";
import { ColumnChartData, ColumnChartDataOption } from "@/Data/Charts/GoogleChart";


const ColumnChart1 = () => {
  return <Col sm="12" xl="6" className="box-col-6">
  <Card>
    <CommonCardHeader title={ColumnChartOne} headClass='pb-0'/>
    <CardBody className="chart-block">
      <div className="chart-overflow" id="column-chart1">
        <Chart chartType="Bar" width="100%" height="400px" data={ColumnChartData} options={ColumnChartDataOption}/>
      </div>
    </CardBody>
  </Card>
</Col>
};

export default ColumnChart1;
