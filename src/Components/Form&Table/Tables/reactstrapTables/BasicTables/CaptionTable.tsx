import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CaptionTableTitle, UserList } from "@/Constant";
import { CaptionBody, CaptionData, CaptionHead } from "@/Data/Form&Table/Table/Reactstrap";
import React from "react";
import { Card, Col, Row } from "reactstrap";
import CommonTable from "../Common/CommonTable";

const CaptionTable = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={CaptionTableTitle} span={CaptionData} spanClass="mt-1" headClass="pb-0" />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable headData={CaptionHead} caption={UserList}>
              {CaptionBody.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.employeeName}</td>
                  <td>{data.email}</td>
                  <td>{data.experience}</td>
                  <td>{data.sex}</td>
                  <td>{data.number}</td>
                  <td>{data.age}</td>
                </tr>
              ))}
            </CommonTable>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default CaptionTable;
