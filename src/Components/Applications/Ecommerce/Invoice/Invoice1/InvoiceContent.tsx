import { AmountDus, BilledTo, CairoMatchettVandelayLTD, InvoiceDate, InvoiceNumber } from "@/Constant";
import React from "react";

const InvoiceContent = () => {
  return (
    <td>
      <table className="bill-content w-100 mt-3">
        <tbody>
          <tr>
            <td style={{ width: "36%" }}>
              <span style={{ color: "#52526C", opacity: "0.8" }}>{BilledTo}</span>
              <h6 style={{ width: "46%" }}>{CairoMatchettVandelayLTD}</h6>
            </td>
            <td style={{ width: "21%" }}>
              <span style={{ color: "#52526C", opacity: "0.8" }}>{InvoiceDate}</span>
              <h6>09/03/2024</h6>
            </td>
            <td>
              <span style={{ color: "#52526C", opacity: "0.8" }}>{InvoiceNumber}</span>
              <h6>#VL25000365</h6>
            </td>
            <td style={{ textAlign: "right" }}>
              <span style={{ color: "#52526C", opacity: "0.8" }}>{AmountDus}</span>
              <h2>$10,908.00</h2>
            </td>
          </tr>
          <tr>
            <td style={{width:'36%'}}>
                <h6 style={{width:'63%', paddingTop:'20px'}}>2118 Thornridge Cir. Syracuse, Connecticut 35624, United State</h6>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default InvoiceContent;
