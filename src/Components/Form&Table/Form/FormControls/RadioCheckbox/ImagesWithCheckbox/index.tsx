import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagesWithCheckboxs } from "@/Constant";
import { ImageWithCheckboxData } from "@/Data/Form&Table/Form";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { CustomImagesWithCheckbox } from "./CustomImagesWithCheckbox";
import DynamicImagesWithCheckbox from "./DynamicImagesWithCheckbox";

const ImagesWithCheckbox = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={ImagesWithCheckboxs} span={ImageWithCheckboxData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <div className="main-img-checkbox">
            <Row className="g-3">
              <CustomImagesWithCheckbox />
              <DynamicImagesWithCheckbox />
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImagesWithCheckbox;
