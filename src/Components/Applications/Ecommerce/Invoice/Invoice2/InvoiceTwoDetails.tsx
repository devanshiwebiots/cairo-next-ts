import { Date, InvoiceNo, PaymentStatus, TotalAmount } from "@/Constant";
import React from "react";

const InvoiceTwoDetails = () => {
  return (
    <td>
      <table className="w-100">
        <tbody>
          <tr style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(82, 82, 108, 0.3)", borderBottom: "1px solid rgba(82, 82, 108, 0.3)", padding: "25px 0" }}>
            <td style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#52526C", opacity: "0.8", fontSize: "18px", fontWeight: "500" }}>{InvoiceNo}</span>
              <h4 style={{ margin: "0", fontWeight: "400", fontSize: "18px" }}>#VL25000365</h4>
            </td>
            <td style={{ display: "flex", alignItems: "center", gap: "6" }}>
              <span style={{ color: "#52526C", opacity: "0.8", fontSize: "18px", fontWeight: "500" }}>{Date} : </span>
              <h4 style={{ margin: "0", fontWeight: "400", fontSize: "18px" }}>09/03/2024</h4>
            </td>
            <td style={{ display: "flex", alignItems: "center", gap: "6" }}>
            <span style={{ color: "#52526C", opacity: "0.8", fontSize: "18px", fontWeight: "500" }}>{PaymentStatus} : </span>
            <h4 style={{ margin: "0", fontWeight: "400", fontSize: "18px", padding:'6px 18px', backgroundColor:'rgba(84, 186, 74, 0.1)', color: '#54BA4A', borderRadius:"5px"}}>Paid</h4>
            </td>
            <td style={{ display: "flex", alignItems: "center", gap: "6" }}>
            <span style={{ color: "#52526C", opacity: "0.8", fontSize: "18px", fontWeight: "500" }}>{TotalAmount} : </span>
            <h4 style={{ margin: "0", fontWeight: "400", fontSize: "18px" }}>$26,410.00</h4>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default InvoiceTwoDetails;
