import SVG from "@/CommonComponent/SVG";
import React from "react";

const InvoiceFiveRightHeader = () => {
  return (
    <td>
      <ul style={{ listStyle: "none", display: "flex", alignItems: "center", background: "linear-gradient(291deg, #015DBE 21.2%, #015DBE 83.92%)", padding: "31px 80px", borderBottomLeftRadius: "100px", gap: "28px" }}>
        <li style={{ display: "flex", alignItems: "center" }}>
          <SVG className="stroke-icon" style={{ height: "14px", width: "14px", fill: "#fff", marginRight: "10px" }} iconId="call" />
          <span style={{ color: "#FFFFFF", fontWeight: 500, fontSize: "16px" }}>(239) 555-0108</span>
        </li>
        <li style={{ display: "flex", alignItems: "center", borderLeft: "1px solid rgba(255, 255, 255, 0.3)", borderRight: "1px solid rgba(255, 255, 255, 0.3)", padding: "0 22px" }}>
          <SVG className="stroke-icon" style={{ height: "16px", width: "16px", fill: "#fff", marginRight: "10px" }} iconId="email-box" />
          <span style={{ color: "#FFFFFF", fontWeight: 500, fontSize: "16px" }}>cairo@themesforest.com</span>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <SVG className="stroke-icon" style={{ height: "16px", width: "16px", fill: "#fff", marginRight: "10px" }} iconId="web" />
          <span style={{ color: "#FFFFFF", fontWeight: 500, fontSize: "16px" }}>Website: www.cairothemes.com</span>
        </li>
      </ul>
    </td>
  );
};

export default InvoiceFiveRightHeader;
