import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DashedBorderTitle } from "@/Constant";
import { DashedBorderBody, DashedBorderData, DashedBorderList } from "@/Data/Form& Table/Table/Reactstrap";
import React from "react";
import { Card, Col, Row } from "reactstrap";
import CommonTable from "../Common/CommonTable";

const DashedBorder = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={DashedBorderTitle} span={DashedBorderData} spanClass="mt-1" headClass="pb-0" />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable headData={DashedBorderList} tableClass="table-dashed">
              {DashedBorderBody.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.className}</td>
                  <td>{data.type}</td>
                  <td>{data.hours}</td>
                  <td>{data.trainer}</td>
                  <td>{data.spots}</td>
                </tr>
              ))}
            </CommonTable>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default DashedBorder;
