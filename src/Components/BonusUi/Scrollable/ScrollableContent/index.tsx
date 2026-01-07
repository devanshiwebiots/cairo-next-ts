import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, ImagePath, ScrollableContents } from "@/Constant";
import { ScrollableContentData, ScrollableContentDataList } from "@/Data/BonusUi/Scrollable";
import React from "react";
import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { DynamicScrollableContent } from "./DynamicScrollableContent";
import Image from "next/image";

const ScrollableContent = () => {
  return (
    <Col xxl="4" md="12">
      <Card>
        <CommonCardHeader title={ScrollableContents} span={ScrollableContentData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <ScrollBar className="scroll-b-none " style={{ width: "100%", height: "300px" }}>
            <ListGroup className="main-lists-content pt-0">
              <ListGroupItem tag="a" className="list-group-item-action active bg-primary" href={Href}>
                <div className="list-wrapper gap-0">
                  <Image className="list-img" src={`${ImagePath}/user/9.jpg`} alt="profile" width={55} height={55} unoptimized/>
                  <div className="list-content">
                    <h6 className="text-white">Molly Boake</h6>
                    <p>MollyBoake@rhyta.com</p>
                    <small>5 days ago</small>
                  </div>
                </div>
              </ListGroupItem>
              <DynamicScrollableContent />
            </ListGroup>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollableContent;
