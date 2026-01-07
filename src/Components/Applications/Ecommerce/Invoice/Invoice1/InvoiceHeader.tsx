import { ImagePath } from "@/Constant";
import Image from "next/image";
import React from "react";
import { Table } from "reactstrap";

const InvoiceHeader = () => {
  return (
    <td>
      <table className="logo-wrappper w-100 mt-3">
        <tbody>
          <tr>
            <td>
              <Image src={`${ImagePath}/logo/logo-1.png`} alt="logo" width={114} height={38} unoptimized/>
              <span style={{ color: "#52526C", opacity: "0.8", display: "block", marginTop: "10px" }}>202-555-0258</span>
            </td>
            <td className="address" style={{ textAlign: "right", color: "#52526C", opacity: "0.8", width: "16%" }}>
              <span> 1982 Harvest Lane
                 New York, NY12210 United State</span>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default InvoiceHeader;
