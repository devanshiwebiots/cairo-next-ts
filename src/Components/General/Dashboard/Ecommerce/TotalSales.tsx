import { ImagePath } from "@/Constant";
import { TopSellData } from "@/Data/Ecommerce";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import { Fragment } from "react";
import RatioImage from "@/CommonComponent/RatioImage";

const TotalSales = () => {
  return (
    <Fragment>
      {TopSellData?.map((data, i) => (
        <Col lg="4" className={`${data.className}`} key={i}>
          <Card className="daily-revenue-card">
            <DashboardCommonHeader title={data.title} />
            <CardBody className={`pb-0 ${data.class}`}>
              <div className="d-flex align-items-center gap-3">
                <div className={`flex-shrink-0 bg-${data.iconColor}`}>
                  <RatioImage src={`${ImagePath}/dashboard-2/icon/${data.image}`} alt="icon" />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center gap-2">
                    <h2>{data.count}</h2>
                    <div className="d-flex total-icon">
                      <p className={`mb-0 up-arrow bg-light-${data.color}`}></p>
                      <span className={`f-w-500 font-${data.color}`}>{data.percentage}</span>
                    </div>
                  </div>
                  <p className="text-truncate">{data.detail}</p>
                </div>
              </div>
              <ReactApexChart id={data.chartId} options={data.chart} series={data.chart.series} type="area" height={90} style={{ color: data.iconColor }} />
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default TotalSales;
