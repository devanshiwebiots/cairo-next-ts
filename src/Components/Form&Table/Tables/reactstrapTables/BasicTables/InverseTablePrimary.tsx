import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { InverseTablWithPrimaryBackgrounds } from "@/Constant";
import { InverseTableWithBackgroundBody, InverseTableWithBackgroundData, InverseTableWithBackgroundHead } from "@/Data/Form& Table/Table/Reactstrap";
import React from "react";
import { Card, Col } from "reactstrap";
import CommonTable from "../Common/CommonTable";

const InverseTablePrimary = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={InverseTablWithPrimaryBackgrounds} span={InverseTableWithBackgroundData} spanClass="mt-1" headClass="pb-0" />
        <CommonTable strip headData={InverseTableWithBackgroundHead} tableClass={"bg-primary "}>
          {InverseTableWithBackgroundBody.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.company}</td>
              <td>{data.salary}</td>
              <td>{data.email}</td>
              <td>{data.position}</td>
              <td>{data.country}</td>
            </tr>
          ))}
        </CommonTable>
      </Card>
    </Col>
  );
};

export default InverseTablePrimary;
