import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { OfferStyleBorders } from "@/Constant";
import { OfferBorderStyleData } from "@/Data/Form&Table/Form";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardFooter from "../DefaultStyle/Common/CommonCardFooter";
import OfferStyleBorderForm from "./OfferStyleBorderForm";

const OfferStyleBorder = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={OfferStyleBorders} span={OfferBorderStyleData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="megaoptions-border-space-sm">
          <OfferStyleBorderForm />
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="success" color2="light-success" btn2Class="list-light-success" />
      </Card>
    </Col>
  );
};

export default OfferStyleBorder;
