import { Description } from "@/Constant";
import { InvoiceTableHeader } from "@/Data/Invoice";
import React from "react";
import InvoiceFourBody from "./InvoiceFourBody";
import InvoiceFourBodyStatic from "./InvoiceFourBodyStatic";

const InvoiceFourContent = () => {
  return (
    <td>
      <table className="w-100" style={{ borderSpacing: "0" }}>
        <thead>
          <tr style={{ background: "#015DBE" }}>
            {InvoiceTableHeader.map((data, i) => (
              <th style={{ border: "none", padding: "18px 15px", textAlign: data === Description ? "left" : "center", position: data === Description ? "relative" : undefined, borderTopLeftRadius: data === Description ? 10 : 0 }} key={i}>
                <span style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>{data}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <InvoiceFourBodyStatic /> 
          <InvoiceFourBody />
        </tbody>
      </table>
    </td>
  );
};

export default InvoiceFourContent;
