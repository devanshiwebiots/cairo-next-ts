import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { Href, ImagePath, MollyBoake, ScrollableList } from "@/Constant";
import { ScrollableData } from "@/Data/Uikits/Lists";
import React from "react";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { DynamicScrollableLists } from "./DynamicScrollableLists";
import Image from "next/image";

const ScrollableLists = () => {
  return (
    <Col xxl="4">
      <Card>
        <CommonUIkitsComponent title={ScrollableList} span={ScrollableData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <ListGroup className="main-lists-content custom-scrollbar scrollbar-wrapper theme-scrollbar">
            <ListGroupItem tag={"a"} className="list-group-item-action active list-hover-primary" href={Href}>
              <div className="list-wrapper gap-0">
                <Image className="list-img" src={`${ImagePath}/user/9.jpg`} alt="profile" width={55} height={55}/>
                <div className="list-content">
                  <h6>{MollyBoake}</h6>
                  <p>MollyBoake@rhyta.com</p> 
                  <small>5 days ago</small>
                </div>
              </div>
            </ListGroupItem>
            <DynamicScrollableLists />
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollableLists;
