import { Cryptoannotation } from "@/Constant";
import { CryptoAnnotationsChart } from "@/Data/Widgets/chart/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import DashboardCommonHeader from "../../Dashboard/common/DashboardCommonHeader";

const CryptoAnnotations = () => {
  return (
    <Col xl="6" lg="12">
      <Card>
        <DashboardCommonHeader title={Cryptoannotation} dropDownFalse={true} />
        <CardBody>
          <div className="chart-container">
            <Row>
              <Col id="crypto-annotation">
                <ReactApexChart options={CryptoAnnotationsChart} series={CryptoAnnotationsChart.series} type="line" height={400} />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CryptoAnnotations;
