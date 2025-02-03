import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { MultipleSectionWithHeader } from "@/Constant";
import { MultipleSectionHeaderData, MultiWithHeaderData } from "@/Data/Form&Table/Form";
import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col } from "reactstrap";

const MultipleSectionsWithHeaders = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={MultipleSectionWithHeader} span={MultipleSectionHeaderData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <div id="multiple-datasets">
            <div className="theme-form">
              <div className="w-100">
                <Typeahead options={MultiWithHeaderData} placeholder="NBA and NHL teams" id="Custom Templates" labelKey={"name"} />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultipleSectionsWithHeaders;
