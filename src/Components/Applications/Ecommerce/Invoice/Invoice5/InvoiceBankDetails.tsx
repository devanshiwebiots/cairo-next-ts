import React from "react";

const InvoiceBankDetails = () => {
  return (
    <td>
      <h4 style={{ fontSize: "42px", fontWeight: 500, color: "#000248", margin: "0 0 12px 0" }}> INVOICE </h4>
      <span style={{ fontSize: "18px", color: "#015DBE", display: "block", fontWeight: 500, marginBottom: "20px" }}>Bank Transfer </span>
      <span style={{ color: "#000248", display: "block", marginBottom: "12px", fontWeight: 500 }}> Leslie Alexander </span>
      <span style={{ display: "block", color: "#52526C", fontSize: "18px", marginBottom: "12px" }}> Bank Account : 0981234098765 </span>
      <span style={{ display: "block", color: "#52526C", marginBottom: "12px", fontSize:18, }}> Code : LEF098756</span>
    </td>
  );
};

export default InvoiceBankDetails;
