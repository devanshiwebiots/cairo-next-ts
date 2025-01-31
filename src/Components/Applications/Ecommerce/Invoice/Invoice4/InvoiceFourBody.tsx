import { InvoiceFourBodyData } from "@/Data/Invoice";
import React, { Fragment } from "react";

const InvoiceFourBody = () => {
  return (
    <Fragment>
      {InvoiceFourBodyData.map(({ subTotal, decTitle, qty, unitePrice }, index) => (
        <tr key={index}>
          <td style={{ padding: "0 30px 30px" }}>
            <h4 style={{ fontWeight: 500, margin: "4px 0px", fontSize: "18px", color: "#000248" }}>{decTitle}</h4>
            <span style={{ color: "#52526C", opacity: 0.8, fontSize: "16px" }}>Regular License</span>
          </td>
          <td style={{ width: "12%", textAlign: "center" }}>
            <span style={{ color: "#52526C", opacity: 0.8 }}>${unitePrice}</span>
          </td>
          <td style={{ width: "12%", textAlign: "center" }}>
            <span style={{ color: "#52526C", opacity: 0.8 }}>{qty}</span>
          </td>
          <td style={{ width: "12%", textAlign: "center" }}>
            <span style={{ color: "#000248", fontWeight: 500, opacity: 0.9 }}>${subTotal}</span>
          </td>
        </tr>
      ))}
    </Fragment>
  );
};

export default InvoiceFourBody;
