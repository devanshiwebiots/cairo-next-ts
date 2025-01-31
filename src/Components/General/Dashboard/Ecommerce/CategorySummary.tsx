import { Categorysummary, Href } from "@/Constant";
import { CategorySummaryChart, CategorySummaryData } from "@/Data/Ecommerce";
import Link from "next/link";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import DashboardCommonHeader from "../common/DashboardCommonHeader";

const CategorySummary = () => {
  return (
    <Col md="6">
      <Card>
        <DashboardCommonHeader title={Categorysummary} />
        <CardBody className=" category">
          <Row>
            <Col xl="6" className="col-6">
              <ul>
                {CategorySummaryData?.map((item, index) => (
                  <li key={index} className="d-flex align-items-center bg-light card-hover">
                    <div className="flex-shrink-0">
                      <div className={`bg-${item.color}`}></div>
                    </div>
                    <div className="flex-grow-1">
                      <Link href={Href}>
                        <h6>{item.title}</h6>
                        <span>{item.description}</span>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </Col>
            <Col xl='6' className="col-6" style={{minHeight:265}}>
              <ReactApexChart options={CategorySummaryChart} series={CategorySummaryChart.series} id='category' type="radialBar" width={252} height={265.7}/>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CategorySummary;
