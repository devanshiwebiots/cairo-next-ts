import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Becomemember, SignUp } from "@/Constant";
import { BecomeMemberData } from "@/Data/Ecommerce";
import React from "react";
import { Button, Card, CardBody, Col, Row } from "reactstrap";

const BecomeMember = () => {
  return (
      <Card>
        <CommonCardHeader title={Becomemember} headClass="pb-0" />
        <CardBody className="pricing-content">
          <Row className="pricing-col gy-4">
            {BecomeMemberData.map((item, index) => (
              <Col lg="3" sm="6" className="box-col-3" key={index}>
                <div className="pricingtable">
                  <div className="pricingtable-header">
                    <h3 className="title">{item.title}</h3>
                  </div>
                  <div className="price-value">
                    <span className="currency">$</span>
                    <span className="amount">{item.amount}</span>
                    <span className="duration">/mo</span>
                  </div>
                  <ul className="pricing-content">
                      <li>{item.benifit1}</li>
                      <li>{item.benifit2}</li>
                      <li>{item.benifit3}</li>
                      <li>{item.benifit4}</li>
                    </ul>
                  <div className="pricingtable-signup">
                     <Button color="primary" size="lg" tag='a'>Sign Up</Button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
  );
};

export default BecomeMember;
