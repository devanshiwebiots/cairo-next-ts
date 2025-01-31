import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { ListsWithRadio, Meditations } from "@/Constant";
import { ListRadioData, ListRadioDataList } from "@/Data/Uikits/Lists";
import React from "react";
import { Card, CardBody, Col, Input, Label, ListGroup, ListGroupItem } from "reactstrap";

const ListsWithRadios = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonUIkitsComponent title={ListsWithRadio} span={ListRadioData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <ListGroup>
            <ListGroupItem>
              <Input className="me-1 active checkbox-danger" type="radio" defaultChecked name="radio" />
              <Label check className="mb-0">
                {Meditations}
              </Label>
            </ListGroupItem>
            {ListRadioDataList.map(({ color, text, id }, index) => (
              <ListGroupItem key={index}>
                <Input className={`me-1 checkbox-${color}`} type="radio" id={`secondRadio-${id}`} name="radio" />
                <Label check className="mb-0" htmlFor={`secondRadio-${id}`}>
                  {text}
                </Label>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListsWithRadios;
