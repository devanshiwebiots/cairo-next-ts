import RatioImage from "@/CommonComponent/RatioImage";
import { Href, ImagePath } from "@/Constant";
import { TrendingOrderBodyData } from "@/Data/Dashboard";
import Link from "next/link";
import { Fragment } from "react";
import { Table } from "reactstrap";

export const TrendingOrdersBody = () => {
  return (
    <Fragment>
      <div className="table-responsive custom-scrollbar">
        <Table className="table display w-100">
          <tbody>
            {TrendingOrderBodyData?.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>
                  <Link href={Href}>
                    <h6>{item.name}</h6>
                  </Link>
                </td>
                <td>
                  <div className="social-user">
                    <ul>
                      {item.image1 && (
                        <li className="d-inline-block">
                          <RatioImage src={`${ImagePath}/dashboard/selling/${item.image1}`} alt="user" className="img-40 rounded-circle" />
                        </li>
                      )}
                      {item.image2 && (
                        <li className="d-inline-block">
                          <RatioImage src={`${ImagePath}/dashboard/selling/${item.image2}`} alt="user" className="img-40 rounded-circle" />
                        </li>
                      )}
                      {item.image3 && (
                        <li className="d-inline-block">
                          <RatioImage src={`${ImagePath}/dashboard/selling/${item.image3}`} alt="user" className="img-40 rounded-circle" />
                        </li>
                      )}
                      {item.rounded && (
                        <li className="d-inline-block">
                          <p className="bg-primary rounded-circle">{item.rounded}</p>
                        </li>
                      )}
                    </ul>
                  </div>
                </td>
                <td>{item.date}</td>
                <td>{item.price}</td>
                <td>
                  <i className={`fa ${item.status === "Done" ? "fa-sort-asc txt-success" : "fa-sort-desc txt-danger"}`} />
                  {item.discount}
                </td>
                <td className={item.status === "Done" ? "txt-success" : "txt-danger"}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
};
