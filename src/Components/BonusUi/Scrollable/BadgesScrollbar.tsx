import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BadgesScrollbars } from "@/Constant";
import { BadgeScroll, BadgeScrollList } from "@/Data/BonusUi/Scrollable";
import React from "react";
import ScrollBar from "react-perfect-scrollbar";
import { Badge, Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const BadgesScrollbar = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={BadgesScrollbars} span={BadgeScroll} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody>
          <ScrollBar style={{ width: "100%", height: "300px" }}>
            <ListGroup numbered className="scroll-rtl">
              {BadgeScrollList.map(({ title, color, text }, index) => (
                <ListGroupItem className="d-flex align-items-start flex-wrap" key={index}>
                  <div className="ms-2 me-auto">{title}</div>
                  <Badge color={color} pill className="p-2">{text}</Badge>
                </ListGroupItem>
              ))}
            </ListGroup>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgesScrollbar;
