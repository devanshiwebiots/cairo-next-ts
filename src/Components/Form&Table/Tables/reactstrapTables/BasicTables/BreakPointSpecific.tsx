import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BreckpointSpecifics } from "@/Constant";
import { BreakPointSpecificBody, BreakPointSpecificData, BreakPointSpecificList } from "@/Data/Form& Table/Table/Reactstrap";
import React from "react";
import { Card, Col, Row } from "reactstrap";
import CommonTable from "../Common/CommonTable";

const BreakPointSpecific = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={BreckpointSpecifics} span={BreakPointSpecificData} headClass="pb-0" spanClass="mt-1" />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable size="sm" headData={BreakPointSpecificList}>
            {BreakPointSpecificBody.map((data) => (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>{data.orderId}</td>
                <td>{data.price}</td>
                <td>{data.qty}</td>
                <td>{data.Total}</td>
              </tr>
            ))}
            </CommonTable>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default BreakPointSpecific;
