import { Href, ImagePath } from "@/Constant";
import { RecentOrdersBodyType } from "@/Types/DashboardType";
import Image from "next/image";
import Link from "next/link";
import { Button, Input, Label } from "reactstrap";

const RecentOrdersBody: React.FC<RecentOrdersBodyType> = ({ currentItems }) => {
  return (
    <tbody>
      {currentItems.map((data, i) => (
        <tr key={i}>
          <td>
            <div className="form-check">
              <Input type="checkbox" />
              <Label check />
            </div>
          </td>
          <td>
            <div className="d-flex align-items-center gap-2">
              <div className="flex-shrink-0">
                <Image src={`${ImagePath}/dashboard-2/${data.image}`} alt="dashboard-2" width={38} height={38} unoptimized/>
              </div>
              <div className="dashboard-3">
                <Link href={Href}>{data.order}</Link>
              </div>
            </div>
          </td>
          <td>{data.date}</td>
          <td>{data.quantity}</td>
          <td className="customer-img">
            <div className="d-flex align-items-center gap-2">
              <div className="flex-shrink-0">
                <Image src={`${ImagePath}/dashboard-2/user/${data.image1}`} alt="dashboard-2" width={40} height={40} unoptimized/>
              </div>
              <div className="flex-grow-1">
                <h6>{data.name}</h6>
              </div>
            </div>
          </td>
          <td>
            <p>${data.amount}</p>
          </td>
          <td>
            <div className="status-box">
              <Button className={`background-light-${data.color} font-${data.color} f-w-500`} color="transparent">
                {data.status}
              </Button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default RecentOrdersBody;
