import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicInputGroup } from "@/Constant";
import { BasicInputGroupData } from "@/Data/Form&Table/Form";
import React from "react";
import { Card, Col } from "reactstrap";
import BasicInputGroupsCardBody from "./BasicInputGroupsCardBody";
import BasicInputGroupsCardFooter from "./BasicInputGroupsCardFooter";

const BasicInputGroups = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={BasicInputGroup} span={BasicInputGroupData} headClass="pb-0" spanClass="mt-1 mb-0" />
        <BasicInputGroupsCardBody />
        <BasicInputGroupsCardFooter />
      </Card>
    </Col>
  );
};

export default BasicInputGroups;
