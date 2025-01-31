import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CommonTableComponentProp } from "@/Types/TableType";
import React from "react";
import { Card, Col, Row, Table } from "reactstrap";

const CommonTableComponent: React.FC<CommonTableComponentProp> = ({ title, data, tableClass }) => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={title} />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive custom-scrollbar">
              <Table className={tableClass} bordered>
                <tbody>
                  {data.map((data, index) => (
                    <tr key={index}>
                      <td className={data.tdClassName}>{data.title}</td>
                      <td className="w-50">{data.tableColData}</td>
                      <td>
                        {data.details.map((item, index) => (
                          <span key={index}>
                            {item.text}
                            {item.code && <code>{item.code}</code>}
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default CommonTableComponent;
