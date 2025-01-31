import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Del, EmTeaxt, Highlight, InlineTextElementss, InstText, Mark, SmallText, Stext, StrongText, Utext } from "@/Constant";
import { InlineData } from "@/Data/Uikits/typography";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const InlineTextElements = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal" style={{minHeight:'430.547px'}}>
        <CommonCardHeader title={InlineTextElementss} span={InlineData} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody>
          <div className="d-flex flex-column gap-2">
            <p className="mb-0">
              {Mark}
              <mark>{Highlight},</mark> Text.
            </p>
            <p className="mb-0">
              <del>{Del}</del>
            </p>
            <p className="mb-0">
              <s>{Stext}</s>
            </p>
            <p className="mb-0">
              <ins>{InstText}</ins>
            </p>
            <p className="mb-0">
              <u>{Utext}</u>
            </p>
            <p className="mb-0">
              <small>{SmallText}</small>
            </p>
            <p className="mb-0">
              <strong>{StrongText}</strong>
            </p>
            <p className="mb-0">
              <em>{EmTeaxt}</em>
            </p>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InlineTextElements;
