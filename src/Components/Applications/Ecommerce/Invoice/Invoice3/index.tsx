import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import InvoiceThirdBankDetails from "./InvoiceThirdBankDetails";
import InvoiceThirdContent from "./InvoiceThirdContent";
import InvoiceThirdDetails from "./InvoiceThirdDetails";
import InvoiceThirdHead from "./InvoiceThirdHead";

const Invoice3Container = () => {
const contentRef = useRef<HTMLDivElement | null>(null);

const handlePrint = useReactToPrint({
  contentRef,
});
  return (
    <div ref={contentRef} className="invoice-2">
      <table style={{ width: "1075px", margin: "0 auto" }}>
        <tbody>
          <tr>
            <InvoiceThirdHead />
          </tr>
          <tr>
            <InvoiceThirdDetails />
          </tr>
          <tr>
            <td>
              <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: "1px", width: "100%", marginBottom: "20px" }}></span>
            </td>
          </tr>
          <tr>
            <InvoiceThirdContent />
          </tr>
          <tr>
            <InvoiceThirdBankDetails />
          </tr>
          <tr>
            <td>
              <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: "1px", width: "100%", marginBottom: "20px" }}></span>
            </td>
          </tr>
          <tr>
            <td>
              <InvoiceButtons handlePrint={handlePrint} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Invoice3Container;
