import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SelectSizings } from "@/Constant";
import { SizingFormData, SizingFormDataList } from "@/Data/Form& Table/Form";
import React from "react";
import { Card, CardBody, Col, Input } from "reactstrap";

const SelectSizing = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={SelectSizings} span={SizingFormData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Input bsSize="sm" type="select" name="select">
            {SizingFormDataList.map((data, i) => (
              <option value={data} key={i}>
                {data}
              </option>
            ))}
          </Input>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SelectSizing;
