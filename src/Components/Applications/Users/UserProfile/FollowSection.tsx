import { SocialData } from "@/Data/Users";
import React from "react";
import { Col, Row } from "reactstrap";
import CountUp from "react-countup";
const FollowSection = () => {
  return (
    <div className="follow">
      <Row>
        {SocialData.map((item, index) => (
          <Col xs="6 " className={item.class} key={index}>
            <CountUp end={item.count} className="follow-num counter" delay={1} />
            <p>{item.text}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default FollowSection;
