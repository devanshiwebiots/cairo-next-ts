import { BankAccount, BankTransfer, Code } from "@/Constant";
import React from "react";

const InvoiceThirdBankDetails = () => {
  return (
    <td>
      <table className="w-100">
        <tbody>
          <tr style={{ display: "flex", justifyContent: "space-between", margin: "28px 0", alignItems: "center" }}>
            <td>
              <span style={{ color: "#52526C", fontSize: 16, fontWeight: 500, opacity: "0.8" }}>{BankTransfer}</span>
              <h4 style={{ display: "block", margin: "12px 0 15px 0", fontSize: 18, color: "#015DBE" }}>Leslie Alexander</h4>
              <span style={{ display: "block", lineHeight: "1.5", color: "#52526C", fontSize: 18, fontWeight: 400 }}>{BankAccount} : 0981234098765</span>
              <span style={{ lineHeight: "1.6", color: "#52526C", fontSize: 18, fontWeight: 400 }}>{Code} : LEF098756</span>
            </td>
            <td>
              <span style={{ color: "#52526C", fontSize: 16, fontWeight: 500, opacity: "0.8" }}>TOTAL AMOUNT</span>
              <h4 style={{ fontWeight: 500, margin: "12px 0 5px 0", fontSize: 26, color: "#015DBE" }}>$175.00</h4>
              <span style={{ color: "#52526C", fontSize: 16, fontWeight: 400, lineHeight: "1.5" }}>All Taxes included </span>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default InvoiceThirdBankDetails;
