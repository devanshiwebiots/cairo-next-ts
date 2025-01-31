import React from "react";

const InvoiceFourAmountTotal = () => {
  return (
    <td>
      <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
        <li style={{ display: "flex", paddingBottom: "16px" }}>
          <span style={{ display: "block", width: "95px", color: "#52526C" }}>Subtotal</span>
          <span style={{ display: "block", width: "25px" }}>:</span>
          <span style={{ display: "block", width: "95px", color: "#000248", opacity: 0.9, fontWeight: 500 }}>$6100.00</span>
        </li>
        <li style={{ display: "flex", paddingBottom: "16px" }}>
          <span style={{ display: "block", width: "95px", color: "#52526C" }}>Tax</span>
          <span style={{ display: "block", width: "25px" }}>:</span>
          <span style={{ display: "block", width: "95px", color: "#000248", opacity: 0.9, fontWeight: 500 }}>$50.00</span>
        </li>
        <li style={{ display: "flex", paddingBottom: "20px" }}>
          <span style={{ display: "block", width: "95px", color: "#52526C" }}>Discount</span>
          <span style={{ display: "block", width: "25px" }}>:</span>
          <span style={{ display: "block", width: "95px", color: "#000248", opacity: 0.9, fontWeight: 500 }}>$30.00</span>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <span style={{ display: "block", width: "95px", color: "#52526C" }}>Total Due</span>
          <span style={{ display: "block", color: "#000248", opacity: 0.9, fontWeight: 500, padding: "12px 25px", borderRadius: "5px", background: "#F5F6F9", fontSize: "18px" }}>$6120.00</span>
        </li>
      </ul>
    </td>
  );
};

export default InvoiceFourAmountTotal;
