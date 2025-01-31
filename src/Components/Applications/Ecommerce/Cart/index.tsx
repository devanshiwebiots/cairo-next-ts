import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Cart } from "@/Constant";

import { Card, CardBody, Col, Container, Row } from "reactstrap";
import CartData from "./CartData";

const CartContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={Cart} />
            <CardBody>
              <CartData />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartContainer;
