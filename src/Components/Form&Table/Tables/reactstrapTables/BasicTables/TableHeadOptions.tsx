import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { TableHeadOption } from "@/Constant";
import { TableHeadOptionBody, TableHeadOptionData, TableHeadOptionHead } from "@/Data/Form& Table/Table/Reactstrap";
import React from "react";
import { Card, Col, Row } from "reactstrap";
import CommonTable from "../Common/CommonTable";

const TableHeadOptions = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={TableHeadOption} span={TableHeadOptionData} spanClass="mt-1" headClass="pb-0" />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable headClass="table-dark" headData={TableHeadOptionHead}>
              {TableHeadOptionBody.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.userName}</td>
                </tr>
              ))}
            </CommonTable>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default TableHeadOptions;
