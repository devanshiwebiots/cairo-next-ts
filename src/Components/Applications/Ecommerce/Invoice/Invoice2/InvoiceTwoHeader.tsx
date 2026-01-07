import { ContactNo, Email, ImagePath, Website } from "@/Constant";
import Image from "next/image";
import React from "react";

const InvoiceTwoHeader = () => {
  return (
    <td>
      <table className="w-100 mt-3">
        <tbody>
          <tr>
           <td>
           <Image src={`${ImagePath}/logo/logo-1.png`} alt="logo" width={114} height={38} unoptimized/>
            <address style={{ color: "#52526C", opacity: "0.8", width: "40%", marginTop: "10px", fontStyle: "normal" }}>
              <span style={{ fontSize: "18px", lineHeight: "1.5", fontWeight: "500" }}>1982 Harvest Lane New York, NY12210 United State</span>
            </address>
           </td>
           <td style={{color:"#52526C", opacity: "0.8", textAlign:'end'}}>
            <span style={{display:'block', lineHeight:'1.5', fontSize:'18px', fontWeight:'500'}}>
            {Email} : cairo@themesforest.com
            </span>
            <span style={{display:'block', lineHeight:"1.5", fontSize:'18px', fontWeight:'500'}}>{Website}: www.cairothemes.com</span>
            <span style={{display:'block', lineHeight:'1.5', fontSize:'18px', fontWeight:'500'}}>{ContactNo} : (316) 555-0116</span>
           </td>
          </tr>
        </tbody>
      </table>
    </td>
  );
};

export default InvoiceTwoHeader;
