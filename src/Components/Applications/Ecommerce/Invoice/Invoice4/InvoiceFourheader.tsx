import { Email, INVOICE, Phone } from "@/Constant";
import React from "react";
import InvoiceRightHeader from "./InvoiceRightHeader";

const InvoiceFourheader = () => {
  return (
    <td>
      <table className="w-100 mt-2">
        <tbody>
          <tr style={{ padding: "28px 0 5px", display: "flex", justifyContent: "space-between" }}>
            <td>
              <h4 style={{ fontSize: 42, fontWeight: 500, color: "#000248", margin: "0" }}>{INVOICE}</h4>
              <ul style={{ listStyleType: "none", display: "flex", gap: 15, padding: "0", margin: "20px 0" }}>
                <li>
                  <span style={{ color: "#52526C", fontSize: 18, fontWeight: 500, opacity: "0.8" }}>Invoice to :</span>
                </li>
                <li>
                  <span style={{ fontWeight: 500, fontSize: 18, color: "#000248", display: "block", marginBottom: "8px" }}> Brooklyn Simmons</span>
                  <span style={{width:'75%', display:'block', lineHeight:'1.5', color: '#52526C', fontSize:18, fontWeight:400, opacity:'0.8',}}>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
                  <span style={{lineHeight:'1.9', color: '#52526C', fontSize:18, fontWeight:400, opacity:'0.8', display:'block'}}>{Phone} : (219) 555-0114</span>
                  <span style={{lineHeight:'1.7', color: '#52526C', fontSize:18, fontWeight:400, opacity:0.8, display:'block'}}>{Email} : yourmail@themesforest.com</span>
                  <span style={{lineHeight:'1.7', color: '#52526C', fontSize:18, fontWeight:400, opacity:'0.8', display:'block'}}>Website: www.websites.com</span>
                </li>
              </ul>
            </td>
            <InvoiceRightHeader />
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default InvoiceFourheader;
