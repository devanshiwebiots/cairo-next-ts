import { ImagePath } from "@/Constant";
import React from "react";
import InvoiceAddressDetails from "./InvoiceAddressDetails";
import InvoiceBankDetails from "./InvoiceBankDetails";
import InvoiceFiveRightHeader from "./InvoiceFiveRightHeader";
import Image from "next/image";

const InvoiceFiveHeader = () => {
  return (
    <td>
      <table className="w-100 mt-3">
        <tbody>
          <tr style={{ padding: "28px 0 22px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <td> <Image src={`${ImagePath}/logo/logo-1.png`} alt="" width={114} height={38}/></td>
            <InvoiceFiveRightHeader />
          </tr>
          <tr style={{display:'flex', justifyContent:'space-between'}}>
            <InvoiceAddressDetails />
            <InvoiceBankDetails />
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default InvoiceFiveHeader;
