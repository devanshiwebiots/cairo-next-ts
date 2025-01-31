import { Recenttransaction } from "@/Constant";
import { ReactTransctionTableData } from "@/Data/Dashboard";
import { Card, CardBody, Col, Table } from "reactstrap";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";
import { TransactionTableBody } from "./TransactionTableBody";
import { TransactionTableHead } from "./TransactionTableHead";

const RecentTransactionTable = () => {
  return (
    <Col xl="6">
      <Card>
        <DashboardCommonHeader title={Recenttransaction} />
        <CardBody className="transaction px-0 card-body"> 
          <div className="dataTables_wrapper">
            <div className="table-responsive custom-scrollbar">
              <Table className="display w-100 top-border dataTable" id="transaction-file">
                <TransactionTableHead />
                <TransactionTableBody currentItems={ReactTransctionTableData} />
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RecentTransactionTable;
