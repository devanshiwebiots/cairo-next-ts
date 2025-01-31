import { Monthlysales } from "@/Constant";
import { MonthSaleCurrentUserData, MonthSalesCHart, MonthSaleTotalPenaltyData } from "@/Data/Dashboard";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { CardBody, Col } from "reactstrap";
import DashboardCommonHeader from "../common/DashboardCommonHeader";

const MonthlySales = () => {
  return (
    <Col md="6">
      <div className="card monthly-growth">
        <DashboardCommonHeader title={Monthlysales} />
        <CardBody>
          <ReactApexChart id="monthlyChart" options={MonthSalesCHart} series={MonthSalesCHart.series} type="bar" height={265} />
          <ul className="d-flex">
            {MonthSaleCurrentUserData?.map((item, index) => (
              <li key={index}>
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <h3>{item.price}</h3>
                    <span>{item.title}</span>
                  </div>
                  <div className="flex-shrink-0">
                    <h4>{item.total}</h4>
                    <span>{item.description}</span>
                  </div>
                </div>
              </li>
            ))}
            {MonthSaleTotalPenaltyData?.map((item, index) => (
              <li key={index}>
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <h3>{item.price}</h3>
                    <span>{item.title}</span>
                  </div>
                  <div className="flex-shrink-0">
                    <h4>{item.total}</h4>
                    <span>{item.description}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </div>
    </Col>
  );
};

export default MonthlySales;
