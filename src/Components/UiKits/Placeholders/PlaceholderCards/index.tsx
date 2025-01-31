import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { PlaceholderCard } from "@/Constant";
import { PlaceholderCardsSpan } from "@/Data/Uikits/Placeholder";
import { Card, CardBody, Col, Row } from "reactstrap";
import StaticPlaceholderCards from "./StaticPlaceholderCards";

const PlaceholderCards = () => {
  return (
    <Col xxl="6" className="box-col-12">
      <Card>
        <CommonUIkitsComponent title={PlaceholderCard} span={PlaceholderCardsSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="loading-card-wrapper">
          <Row className="gy-3">
            <StaticPlaceholderCards />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PlaceholderCards;
