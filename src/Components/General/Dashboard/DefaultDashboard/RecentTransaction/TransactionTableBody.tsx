import { Input, Label } from 'reactstrap';
import Link from 'next/link';
import { CommonDropdown } from '../../common/CommonDropdown';
import { Href, ImagePath } from '@/Constant';
import { ReactTransctionTableData } from '@/Data/Dashboard';
import Image from 'next/image';

export const TransactionTableBody: React.FC<{ currentItems: typeof ReactTransctionTableData }> = ({ currentItems }) => {
  return (
    <tbody>
      {currentItems?.map((item) => (
        <tr key={item.id}>
          <td>
            <div className="form-check">
              <Input type="checkbox" value="" />
              <Label check></Label>
            </div>
          </td>
          <td>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <Image src={`${ImagePath}/dashboard/user/${item.image}`} alt="User" width={42} height={42} unoptimized/>
              </div>
              <div className="flex-grow-1 ms-2">
                <Link href={Href}><h6>{item.name}</h6></Link>
              </div>
            </div>
          </td>
          <td>{item.date}</td>
          <td>{item.amount}</td>
          <td>
            <div className="transaction-dot">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <span className={`bg-${item.color}`} style={{ backgroundColor: item.color }}></span>
                </div>
                <div className="flex-grow-1">
                  <h6>{item.type}</h6>
                </div>
              </div>
            </div>
          </td>
          <td className="text-center"><CommonDropdown /></td>
        </tr>
      ))}
    </tbody>
  );
};
