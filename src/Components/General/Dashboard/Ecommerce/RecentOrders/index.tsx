import { RecentOrder } from "@/Constant";
import { RecentOrdersData } from "@/Data/Ecommerce";
import { useMemo, useState } from "react";
import { Card, CardBody, Col, Input, Label, Table } from "reactstrap";
import DashboardEcomCommonHeader from "../../common/DashboardEcomCommonHeader";
import RecentOrdersBody from "./RecentOrdersBody";

const RecentOrders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return RecentOrdersData.slice(startIndex, endIndex);
  }, [currentPage]);
  return (
    <Col xxl="7" xl="8" sm="12">
      <Card>
        <DashboardEcomCommonHeader title={RecentOrder} />
        <CardBody className=" recent-orders px-0">
          <div className="dataTables_wrapper">
            <div className="table-responsive theme-scrollbar">
              <Table className="display mb-2 dataTable" id="recent-orders">
                <thead>
                  <tr>
                    <th>
                      <div className="form-check">
                        <Input type="checkbox" />
                        <Label check />
                      </div>
                    </th>
                    <th>products Name</th>
                    <th>Order Date</th>
                    <th>QTY</th>
                    <th>Customer</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <RecentOrdersBody currentItems={currentItems} />
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RecentOrders;
