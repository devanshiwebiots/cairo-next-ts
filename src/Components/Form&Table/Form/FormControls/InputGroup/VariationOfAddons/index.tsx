import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { VariationOfAddon } from "@/Constant";
import { VariationOfAddonData } from "@/Data/Form& Table/Form";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import VariationAddonsFormContent from "./VariationAddonsFormContent";
import { VariationOfAddonsCardFooter } from "./VariationOfAddonsCardFooter";

const VariationOfAddons = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={VariationOfAddon} span={VariationOfAddonData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="card-wrapper input-radius">
          <Row>
            <Col>
              <VariationAddonsFormContent />
            </Col>
          </Row>
        </CardBody>
        <VariationOfAddonsCardFooter />
      </Card>
    </Col>
  );
};

export default VariationOfAddons;
