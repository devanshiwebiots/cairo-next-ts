import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { PaddingHeading } from "@/Constant";
import { PaddingData, PaddingSpan } from "@/Data/Uikits/HelperClasses";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const Padding = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonUIkitsComponent title={PaddingHeading} span={PaddingSpan} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <div className="border-wrapper h-100 alert-light-light dark-helper">
            <div className="helper-common-box helper-p-wrapper">
              {PaddingData.map((data,index) => (
                <div className={`helper-p-box p-${data} bg-light border`} key={index}>
                  <span>p-{data}</span>
                </div>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Padding;
