import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { IconsCommonProps } from "@/Types/IconType";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const FontAwsomeCard: React.FC<IconsCommonProps> = ({ iconType, title, parentCallback }) => {
  const getITag = (tag: string) => {
    parentCallback(tag);
  };
  return (
    <Card>
      <CommonCardHeader title={title} headClass='pb-0'/>
      <CardBody>
        <Row className="icon-lists">
          {iconType.map((icon, i) => (
            <Col sm="6" md="4" xl="3" key={i} onClick={() => getITag(icon)}>
              <i className={`fa fa-${icon}`}></i> {"fa fa-"}
              {icon}
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
};

export default FontAwsomeCard;
