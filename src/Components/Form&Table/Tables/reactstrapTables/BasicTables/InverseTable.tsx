import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { InverseTables } from "@/Constant";
import { InverseTableBody, InverseTableHead, InverseTablesData } from "@/Data/Form& Table/Table/Reactstrap";
import React from "react";
import { Card, Col } from "reactstrap";
import CommonTable from "../Common/CommonTable";

const InverseTable = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={InverseTables} span={InverseTablesData} spanClass='mt-1 ' headClass="pb-0"/>
        <CommonTable tableClass="table-inverse" headData={InverseTableHead} headRowClass="border-bottom-light">
          {InverseTableBody.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.office}</td>
              <td>{data.position}</td>
              <td>{data.salary}</td>
              <td>{data.joinDate}</td>
              <td>{data.age}</td>
            </tr>
          ))}
        </CommonTable>
      </Card>
    </Col>
  );
};

export default InverseTable;
