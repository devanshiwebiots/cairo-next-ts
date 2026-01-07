import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicTableWithBorderBottomColor, ImagePath } from "@/Constant";
import { BasicTableBody, BasicTableBorderColor, BasicTableHead } from "@/Data/Form&Table/Table/Reactstrap";
import Image from "next/image";
import { Badge, Card, Col } from "reactstrap";
import CommonTable from "../../Common/CommonTable";

const BasicTableWithBorder = () => {
  return (
    <Col sm="12">
      <Card className="basicborder-table">
        <CommonCardHeader title={BasicTableWithBorderBottomColor} span={BasicTableBorderColor} spanClass="mt-1" headClass="pb-0" />
        <CommonTable headData={BasicTableHead} headRowClass="border-bottom-primary">
          {BasicTableBody.map((data) => (
            <tr className={`border-bottom-${data.color}`} key={data.id}>
              <th scope="row">{data.id}</th>
              <td>
                <Image className="img-30 me-2" src={`${ImagePath}/${data.image}`} alt="" width={30} height={30} unoptimized/>
                {data.firstname}
              </td>
              <td>{data.lastName}</td>
              <td>{data.userName}</td>
              <td>{data.designation}</td>
              <td>{data.company}</td>
              <td>
                <Badge color={`light-${data.badgeColor}`} className={`text-${data.badgeColor}`}>
                  {data.language}
                </Badge>
              </td>
              <td>{data.country}</td>
            </tr>
          ))}
        </CommonTable>
      </Card>
    </Col>
  );
};

export default BasicTableWithBorder;
