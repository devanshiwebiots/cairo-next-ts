import SVG from "@/CommonComponent/SVG";
import { Href, Transactionhistory } from "@/Constant";
import { TransactionHistoryData } from "@/Data/Widgets/General";
import Link from "next/link";
import React from "react";
import { Card, CardBody, Col, Table } from "reactstrap";
import DashboardCommonHeader from "../../Dashboard/common/DashboardCommonHeader";

const TransactionHistory = () => {
  return (
    <Col xl="4" md="6">
      <Card className="transaction-history">
        <DashboardCommonHeader title={Transactionhistory} />
        <CardBody>
          <div className={`table-responsive custom-scrollbar `}>
            <Table className={`table display w-100 `}>
              <tbody>
                {TransactionHistoryData?.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className={`bg-light-${data.color} history `}>
                          <SVG iconId={data.icon} />
                        </span>
                        <div className={`flex-grow-1 ms-2 `}>
                          <Link href={Href}>
                            <span>{data.title}</span>
                            <h5>{data.date}</h5>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td >{data.status}</td>
                    <td >{data.amount}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TransactionHistory;
