import { Currentcustomers, Href, ImagePath } from "@/Constant";
import { CurrentCustomersData } from "@/Data/Ecommerce";
import Link from "next/link";
import { Card, CardBody, Col, Table } from "reactstrap";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import RatioImage from "@/CommonComponent/RatioImage";

const CurrentCustomers = () => {
  return (
    <Col xxl="3" lg="5" md="6" className="box-col-5">
      <Card>
        <DashboardCommonHeader title={Currentcustomers} />
        <CardBody className="current-customer">
          <Table>
            <tbody>
              {CurrentCustomersData?.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex gap-2 align-items-center">
                      <div className="flex-shrink-0">
                        <RatioImage src={`${ImagePath}/dashboard-2/order/${item.image}`} className="img-fluid img-40 b-r-10" alt={item.name} />
                      </div>
                      <div className="flex-grow-1">
                        <Link href={Href}>
                          <h6>{item.name}</h6>
                          <span>{item.email}</span>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <h6>{item.price}</h6>
                    <span>{item.discount}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CurrentCustomers;
