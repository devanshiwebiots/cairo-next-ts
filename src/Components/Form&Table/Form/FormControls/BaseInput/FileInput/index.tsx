import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FileInputs, LargeFileInputExample, SmallFileInputExample } from "@/Constant";
import { FileInputData, FileInputDataList } from "@/Data/Form&Table/Form";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonFileInput from "./Common/CommonFileInput";

const FileInput = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FileInputs} span={FileInputData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          {FileInputDataList.map((item, i) => (
            <CommonFileInput label={item.label} multiple={item.multiple} disabled={item.disabled} key={i} />
          ))}
          <CommonFileInput label={SmallFileInputExample} size="sm" />
          <CommonFileInput label={LargeFileInputExample} size="lg" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default FileInput;
