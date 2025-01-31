import { Total } from "@/Constant";
import { Fragment } from "react";

const InvoiceTotal = () => {
  return (
    <Fragment>
      <td />
      <td />
      <td className="Rate">
        <h4 className="mb-0 p-2">{Total}</h4>
      </td>
      <td className="payment">
        <h4 className="mb-0 p-2">$3,644.25</h4>
      </td>
    </Fragment>
  );
};

export default InvoiceTotal;
