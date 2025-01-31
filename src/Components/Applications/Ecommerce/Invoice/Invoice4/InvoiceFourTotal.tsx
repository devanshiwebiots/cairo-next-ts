import React from "react";
import InvoiceFourAmountTotal from "./InvoiceFourAmountTotal";

const InvoiceFourTotal = () => {
  return (
    <td>
      <table className="w-100">
        <tbody>
          <tr style={{ display: "flex", justifyContent: "space-between", margin: "16px 0 24px 0", alignItems: "flex-end" }}>
            <td style={{ display: "flex", gap: "10px" }}>
              <span style={{ color: "#000248", fontSize: "16px", fontWeight: 500 }}>Payment Terms: </span>
              <span style={{ display: "block", lineHeight: 1.5, color: "#52526C", fontSize: "16px", fontWeight: 400, width: "55%" }}>{"This denotes a payment credit for a full month's supply."}</span>
            </td>
            <InvoiceFourAmountTotal />
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default InvoiceFourTotal;
