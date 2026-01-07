import { ImagePath } from "@/Constant";
import Image from "next/image";
import React, { Fragment } from "react";

const InvoiceFiveSign = () => {
  return (
    <Fragment>
      <Image src={`${ImagePath}/email-template/invoice-3/sign.png`} style={{ display: "block", marginBottom: "10px" }} alt="" width={176} height={40} unoptimized/>
      <span style={{ color: "#000248", display: "block", fontSize: "18px", fontWeight: 500 }}> Laurine T. Ebbert </span>
      <span style={{ color: "#52526C", display: "block", fontSize: "14px", paddingTop: "5px" }}>( Designer )</span>
    </Fragment>
  );
};

export default InvoiceFiveSign;
