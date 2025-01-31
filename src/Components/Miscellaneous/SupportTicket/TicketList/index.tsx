import { TicketListData } from "@/Data/SupportTicket";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import CountUp from "react-countup";
import { Loss, profit } from "@/Constant";

const TicketList = () => {
  return (
    <Row>
      {TicketListData.map(({ title, color, countNum }, index) => (
        <Col xl="4" md="6" className="box-col-6" key={index}>
          <Card className={`ecommerce-widget bg-light-${color} txt-${color} shadow-none`}>
            <CardBody className="support-ticket-font">
              <Row>
                <Col className="col-5">
                  <span className={`txt-${color}`}>{title}</span>
                  <h3 className="total-num counter">
                    <CountUp end={countNum} className="text-dark mb-1" delay={1} />
                  </h3>
                </Col>
                <Col xl="7">
                  <div className="text-end">
                    <ul>
                      <li className={`txt-${color}`}>{profit} <span className="product-stts txt-success ms-2">8989<i className="icon-angle-up f-12 ms-1"></i>  </span>
                      </li>
                      <li className={`txt-${color}`}>
                        {Loss} <span className="product-stts txt-danger ms-2"> 2560<i className="icon-angle-down f-12 ms-1"></i> </span>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <div className="progress-showcase mt-4">
                <div className={`progress sm-progress-bar progress-striped-${color}`}>
                  <div className={`progress-bar`} style={{ width: "70%" }}></div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TicketList;
