import Image from "next/image";
import React from "react";

const InvoiceRightHeader = () => {
  return (
    <td>
      <Image style={{ marginBottom: "14px" }} src="/assets/images/logo/logo-1.png" alt="logo" width={114} height={38} unoptimized/>
      <span style={{ display: "block", lineHeight: 1.5, color: "#52526C", fontSize: "18px", fontWeight: 400, opacity: 0.8 }}>2118 Thornridge Cir. Syracuse, Connecticut 35624, United State</span>
      <span style={{ display: "block", lineHeight: 1.5, color: "#52526C", fontSize: "18px", fontWeight: 400, opacity: 0.8 }}>Phone: (239) 555-0108</span>
      <span style={{ display: "block", lineHeight: 1.5, color: "#52526C", fontSize: "18px", fontWeight: 400, opacity: 0.8 }}>Email: cairo@themesforest.com</span>
      <span style={{ display: "block", lineHeight: 1.5, color: "#52526C", fontSize: "18px", fontWeight: 400, opacity: 0.8 }}>Website: www.cairothemes.com</span>
    </td>
  );
};

export default InvoiceRightHeader;
