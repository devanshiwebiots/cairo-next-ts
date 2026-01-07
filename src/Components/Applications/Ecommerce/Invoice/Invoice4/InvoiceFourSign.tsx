import React from "react";
import { ImagePath } from "@/Constant";
import Image from "next/image";

const InvoiceFourSign: React.FC = () => {
  return (
    <td>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <Image src={`${ImagePath}/email-template/invoice-3/sign.png`} alt="sign" style={{ marginRight: "10px" }} width={176} height={40} unoptimized/>
        <div>
          <span style={{ color: "#000248", display: "block", fontSize: "18px", fontWeight: 500 }}>Laurine T. Ebbert</span>
          <span style={{ color: "#52526C", display: "block", fontSize: "14px", paddingTop: "5px" }}>( Designer )</span>
        </div>
      </div>
    </td>
  );
};

export default InvoiceFourSign;
