import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Sizingtabless } from "@/Constant";
import { SizingTablesBody, SizingTablesData, SizingTablesList } from "@/Data/Form&Table/Table/Reactstrap";
import React from "react";
import { Card, Col, Row } from "reactstrap";
import CommonTable from "../Common/CommonTable";

const SizingTables = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={Sizingtabless} span={SizingTablesData} headClass="pb-0" spanClass="mt-1" />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable headData={SizingTablesList} size="lg">
              {SizingTablesBody.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.employName}</td>
                  <td>{data.date}</td>
                  <td className={`font-${data.color}`}>{data.status}</td>
                  <td>{data.hours}</td>
                  <td>{data.performance}</td>
                </tr>
              ))}
            </CommonTable>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default SizingTables;
