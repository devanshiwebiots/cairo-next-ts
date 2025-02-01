import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import InvoiceFiveDetails from "./InvoiceFiveDetails";
import InvoiceFiveHeader from "./InvoiceFiveHeader";
import InvoiceFiveSign from "./InvoiceFiveSign";
import InvoiceTable from "./InvoiceTable";

const Invoice5Container = () => {
const contentRef = useRef<HTMLDivElement | null>(null);

const handlePrint = useReactToPrint({
  contentRef,
});
  return (
    <div className="invoice-2" ref={contentRef}>
      <table style={{ width: "1070px", margin: " 0 auto" }}>
        <tbody>
          <tr>
            <InvoiceFiveHeader />
          </tr>
          <tr>
            <InvoiceFiveDetails />
          </tr>
          <tr>
            <InvoiceTable />
          </tr>
          <tr style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "36px" }}>
            <td>
              <InvoiceFiveSign />
            </td>
            <td>
              <InvoiceButtons handlePrint={handlePrint} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Invoice5Container;
