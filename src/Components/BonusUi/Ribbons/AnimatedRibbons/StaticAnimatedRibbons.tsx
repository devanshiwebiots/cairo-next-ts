import { Fragment } from "react";
import { Card, Col } from "reactstrap";

const StaticAnimatedRibbons = () => {
  return (
    <Fragment>
      <Col md="6" xl="4">
        <div className="vertical-ribbon-animate">
          <div className="ribbon-vertical-right-wrapper border border-1 vertical-rp-space height-equal" style={{ minHeight: "225.391px" }}>
            <div className="ribbon ribbon-vertical-right ribbon-secondary ribbon-bottom-arrow">
              <span>10% OFF</span>
            </div>
            <p>
              Ribbon designs use the class of <em className="txt-danger">ribbon-vertical-right & ribbon-bottom-arrow</em> through create top-start ribbon and common class use "ribbon".
            </p>
          </div>
        </div>
      </Col>
      <Col md="6" xl="4">
        <Card>
          <div className="animated-ribbon ribbon-wrapper smooth-animate border border-1 height-equal alert-light-light">
            <p className="mb-0">
              Ribbon designs use the class of <em className="txt-danger">animated-ribbon & smooth-animate</em> through create bottom-end ribbon and common class use "ribbon".
            </p>
            <div className="box">
              <div className="ribbon">
                <i className="back"></i>
                <i className="front">
                  <span>Upcoming</span>
                </i>
              </div>
            </div>
            <div className="box-svg">
              <svg className="ribbon-svg" id="ribbon" width="300" height="60"></svg>
            </div>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};

export default StaticAnimatedRibbons;
