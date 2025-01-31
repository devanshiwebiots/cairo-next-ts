import { ArticleVideoOne } from "@/Data/FAQ";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const ArticleVideo1 = () => {
  return (
    <Col xl="4" md="6">
      <Row>
        {ArticleVideoOne.map(({ icon, title, description }, index) => (
          <Col sm="12" key={index}>
            <Card>
              <CardBody>
                <div className="d-flex">
                  {icon}
                  <div className="flex-grow-1">
                    <h5 className="pb-2">{title}</h5>
                    <p>{description}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default ArticleVideo1;
