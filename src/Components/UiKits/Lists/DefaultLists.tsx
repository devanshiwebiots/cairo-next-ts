import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { DefaultList } from "@/Constant";
import { DefaultData, DefaultListData } from "@/Data/Uikits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const DefaultLists = () => {
  return (
    <Col xl="4" md="6">
      <Card>
        <CommonUIkitsComponent title={DefaultList} span={DefaultData} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody>
          <ListGroup>
            <ListGroupItem>
              <i className="icofont icofont-arrow-right"></i>Logo design
            </ListGroupItem>
            {DefaultListData.map((item, index) => (
              <ListGroupItem key={index}>
                <i className="icofont icofont-arrow-right"></i>
                {item}
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultLists;
