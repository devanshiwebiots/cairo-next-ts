import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { DisabledList, Href, ImagePath } from "@/Constant";
import { DisableList, DisableListData } from "@/Data/Uikits/Lists";
import Image from "next/image";
import React from "react";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const DisabledLists = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonUIkitsComponent title={DisabledList} span={DisableListData} spanClass='mt-1 mb-0' headClass="pb-0"/>
        <CardBody>
          <ListGroup>
            <ListGroupItem tag="a" className="list-group-item-action list-hover-primary active" href={Href}>
              <Image className="rounded-circle" src={`${ImagePath}/user/1.jpg`} alt="user" width={40} height={40} unoptimized/>
              Teresa J. Mosteller
            </ListGroupItem>
            {DisableList.map(({ text, className, src }, index) => (
              <ListGroupItem tag="a" className={`list-group-item-action ${className ? className : ""}`} key={index} href={Href}>
                <Image className="rounded-circle" src={`${ImagePath}/${src}`} alt="user" width={40} height={40} unoptimized/>
                {text}
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisabledLists;
