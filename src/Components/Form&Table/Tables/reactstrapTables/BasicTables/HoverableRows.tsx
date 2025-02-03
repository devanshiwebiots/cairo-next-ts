import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HoverableRowsWithHorizontalBorders } from "@/Constant";
import { HoverableRowBody, HoverableRowData, HoverableRowHead } from "@/Data/Form&Table/Table/Reactstrap";
import React from "react";
import { Card, Col } from "reactstrap";
import CommonTable from "../Common/CommonTable";

const HoverableRows = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={HoverableRowsWithHorizontalBorders} span={HoverableRowData} headClass="pb-0" spanClass="mt-1" />
        <CommonTable headData={HoverableRowHead} tableClass="signal-table" hover>
          {HoverableRowBody.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td className="d-flex align-items-center">
                {data.icon}
                <span className={`font-${data.color}`}>{data.status}</span>
              </td>
              <td>{data.signalName}</td>
              <td>{data.security}</td>
              <td>{data.stage}</td>
              <td>{data.schedule}</td>
              <td>{data.teamLead}</td>
            </tr>
          ))}
        </CommonTable>
      </Card>
    </Col>
  );
};

export default HoverableRows;
