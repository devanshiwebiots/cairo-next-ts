import React from "react";

const InvoiceFourBodyStatic = () => {
  return (
    <tr>
      <td style={{ padding: "30px" }}>
        <h4 style={{ fontWeight: 500, margin: "4px 0px", fontSize: "18px", color: "#000248" }}>Proposal & Brochure Design</h4>
        <span style={{ color: "#52526C", opacity: 0.8, fontSize: "16px" }}>Regular License</span>
      </td>
      <td style={{ width: "12%", textAlign: "center" }}>
        <span style={{ color: "#52526C", opacity: 0.8 }}>$300.00</span>
      </td>
      <td style={{ width: "12%", textAlign: "center" }}>
        <span style={{ color: "#52526C", opacity: 0.8 }}>1</span>
      </td>
      <td style={{ width: "12%", textAlign: "center" }}>
        <span style={{ color: "#000248", fontWeight: 500, opacity: 0.9 }}>$300.00</span>
      </td>
    </tr>
  );
};

export default InvoiceFourBodyStatic;
