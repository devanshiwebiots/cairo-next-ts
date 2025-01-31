import { Cryptocurrencyprices } from "@/Constant";
import { CryptocurrencyPricesChart } from "@/Data/Widgets/chart/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import DashboardCommonHeader from "../../Dashboard/common/DashboardCommonHeader";

const CryptocurrencyPrices = () => {
  return (
    <Col xl="6" lg="12" className="xl-50">
      <Card>
        <DashboardCommonHeader title={Cryptocurrencyprices} dropDownFalse={true} />
        <CardBody>
          <div className="chart-container crypto-chart">
            <Row>
              <Col id="chart-crypto">
                <ReactApexChart options={CryptocurrencyPricesChart} series={CryptocurrencyPricesChart.series} height="400" type="area" />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CryptocurrencyPrices;
