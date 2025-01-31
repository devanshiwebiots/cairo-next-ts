import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BillingDetails } from "@/Constant";
import React from "react";
import { Card, CardBody, Container, Row } from "reactstrap";
import CheckoutForm from "./CheckoutForm";
import ProductCheckout from "./ProductCheckout";

const CheckoutContainer = () => {
  return (
    <Container fluid>
      <Card className="checkout">
        <CommonCardHeader title={BillingDetails} headClass="pb-0" />
        <CardBody>
          <Row>
            <CheckoutForm />
            <ProductCheckout />
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default CheckoutContainer;
