import { Download, Href, PrintInvoice } from "@/Constant";
import { InvoicePrintType } from "@/Types/EcommerceType";
import Link from "next/link";
import React from "react";

export const InvoiceButtons: React.FC<InvoicePrintType> = ({ handlePrint }) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", gap: "15px" }}>
      <Link onClick={handlePrint} style={{ background: "#015DBE", color: "rgba(255, 255, 255, 1)", borderRadius: "10px", padding: "18px 27px", fontSize: "16px", fontWeight: 600, outline: 0, border: 0, textDecoration: "none" }} href={Href}>
        {PrintInvoice}
        <i className="icon-arrow-right" style={{ fontSize: "13px", fontWeight: "bold", marginLeft: "10px" }} />
      </Link>
      <Link style={{ background: "rgba(1, 93, 190, 0.1)", color: "#015DBE", borderRadius: "10px", padding: "18px 12px", fontSize: "16px", fontWeight: 600, outline: 0, border: 0, textDecoration: "none" }} href={`/ecommerce/product`} download>
        {Download}
        <i className="icon-arrow-right" style={{ fontSize: "13px", fontWeight: "bold", marginLeft: "10px" }} />
      </Link>
    </div>
  );
};
