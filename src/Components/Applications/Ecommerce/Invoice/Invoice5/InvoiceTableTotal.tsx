import { Discount, Subtotal, TotalDue, VATTax } from "@/Constant";
import { Fragment } from "react";

const InvoiceTableTotal = () => {
  return (
    <Fragment>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td style={{ textAlign: "center", padding: "35px 0 18px" }}>
          <span style={{ color: "#52526C", opacity: 0.8, fontWeight: 500 }}> {Subtotal} </span>
        </td>
        <td style={{ textAlign: "center", background: "#F5F6F9", display: "block", padding: "35px 0 18px" }}>
          <span style={{ color: "#000248", fontWeight: 500, opacity: 0.9 }}> $6100.00</span>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td style={{ width: "12%", textAlign: "center" }}>
          <span style={{ color: "#52526C", opacity: 0.8, fontWeight: 500 }}> {VATTax}</span>
        </td>
        <td style={{ textAlign: "center", background: "#F5F6F9", display: "block", paddingBottom: "18px" }}>
          <span style={{ color: "#000248", fontWeight: 500, opacity: 0.9 }}> $50.00</span>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td style={{ width: "12%", textAlign: "center" }}>
          <span style={{ color: "#52526C", opacity: 0.8, fontWeight: 500 }}>{Discount}</span>
        </td>
        <td style={{ textAlign: "center", background: "#F5F6F9", display: "block", paddingBottom: "18px" }}>
          <span style={{ color: "#000248", fontWeight: 500, opacity: 0.9 }}>$30.00</span>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td style={{ width: "12%", textAlign: "center" }}>
          <span style={{ color: "#52526C", opacity: 0.8, fontWeight: 500 }}> {TotalDue} </span>
        </td>
        <td style={{ textAlign: "center", background: "#F5F6F9" }}>
          <span style={{ color: "#ffffff", fontWeight: 500, opacity: 0.9, background: "#52526C", padding: "12px 37px", marginTop: "0px", display: "block" }}>$6120.00</span>
        </td>
      </tr>
    </Fragment>
  );
};

export default InvoiceTableTotal;
