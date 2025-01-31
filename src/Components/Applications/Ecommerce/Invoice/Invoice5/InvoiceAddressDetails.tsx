import React from "react";

const InvoiceAddressDetails = () => {
  return (
    <td>
      <span style={{ fontSize: "18px", display: "block", fontWeight: 500, color: "#015DBE", marginBottom: "14px" }}> Invoice to : </span>
      <span style={{ fontSize: "18px", display: "block", fontWeight: 500, color: "rgba(0, 2, 72, 1)", marginBottom: "8px" }}>Brooklyn Simmons </span>
      <span style={{ fontSize: "18px", display: "block", color: "#52526C", opacity: 0.8, marginBottom: "8px", width: "72%", lineHeight: 1.4 }}> 2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
      <span style={{ fontSize: "18px", display: "block", color: "#52526C", opacity: 0.8, marginBottom: "8px" }}> Phone : (219) 555-0114 </span>
      <span style={{ fontSize: "18px", display: "block", color: "#52526C", opacity: 0.8, marginBottom: "8px" }}> Email : yourmail@themesforest.com </span>
      <span style={{ fontSize: "18px", display: "block", color: "#52526C", opacity: 0.8, marginBottom: "8px" }}>Website: www.websites.com</span>
    </td>
  );
};

export default InvoiceAddressDetails;
