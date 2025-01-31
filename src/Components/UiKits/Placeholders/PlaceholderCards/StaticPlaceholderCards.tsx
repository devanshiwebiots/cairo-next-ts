import RatioImage from "@/CommonComponent/RatioImage";
import { Href, ImagePath } from "@/Constant";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, CardBody, CardText, Col, Placeholder } from "reactstrap";

const StaticPlaceholderCards = () => {
  return (
    <Fragment>
      <Col sm="6">
        <Card className="mb-0 overflow-hidden">
          <RatioImage src={`${ImagePath}/masonry/5.jpg`} className="card-img-top img-fluid" />
          <CardBody>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
            <Link className="btn btn-primary" href={Href}>
              Go somewhere
            </Link>
          </CardBody>
        </Card>
      </Col>
      <Col sm="6">
        <Card className="mb-0 overflow-hidden">
          <RatioImage src={`${ImagePath}/masonry/13.jpg`} className="card-img-top img-fluid" />
          <CardBody>
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-4 placeholder-light"></span>
            </h5>
            <CardText className=" placeholder-glow mb-3">
              <Placeholder className=" col-7 placeholder-light"/>
              <Placeholder className="col-4 placeholder-light"/>
              <Placeholder className="col-4 placeholder-light"/>
              <Placeholder className="col-6 placeholder-light"/>
              <Placeholder className="col-3 placeholder-light"/>
            </CardText>
            <Link className="btn btn-primary disabled placeholder col-6" href={Href}></Link>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default StaticPlaceholderCards;
