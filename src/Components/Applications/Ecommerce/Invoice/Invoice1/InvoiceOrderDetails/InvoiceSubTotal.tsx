import { Subtotal } from "@/Constant";
import { Fragment } from "react";

const InvoiceSubTotal = () => {
  return (
    <Fragment>
    <td> </td>
    <td> </td>
    <td style={{ padding: "5px 0", paddingTop: 15 }}>
      <span style={{color: '#52526C'}}>{Subtotal}</span>
    </td>
    <td style={{padding: "5px 0",textAlign: "right",paddingTop: 15,}}>
      <span>$26,000.00</span>
    </td>
  </Fragment>
  );
};

export default InvoiceSubTotal;
