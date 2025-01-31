import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import InvoiceFourContent from "./InvoiceFourContent";
import InvoiceFourDetails from "./InvoiceFourDetails";
import InvoiceFourheader from "./InvoiceFourheader";
import InvoiceFourSign from "./InvoiceFourSign";
import InvoiceFourTotal from "./InvoiceFourTotal";

const Invoice4Container = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="invoice-2" ref={componentRef}>
      <table style={{ width: "1070px", margin: "0 auto" }}>
        <tbody>
          <tr>
            <InvoiceFourheader />
          </tr>
          <tr>
            <InvoiceFourDetails />
          </tr>
          <tr>
            <InvoiceFourContent />
          </tr>
          <tr>
            <td style={{ height: "3px", width: "100%", background: "linear-gradient(90deg, #015DBE 20.61%, rgba(111, 90,153, 0) 103.6%)", display: "block" }}></td>
          </tr>
          <tr>
            <InvoiceFourTotal />
          </tr>
          <tr style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
            <InvoiceFourSign />
            <td>
              <InvoiceButtons handlePrint={handlePrint} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Invoice4Container;
