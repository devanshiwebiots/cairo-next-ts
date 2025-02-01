import { Fragment, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import InvoiceBackImage from "./InvoiceBackImage";
import InvoiceContent from "./InvoiceContent";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceOrderDetails from "./InvoiceOrderDetails/InvoiceOrderDetails";
import InvoiceSign from "./InvoiceOrderDetails/InvoiceSign";

const Invoice1Container = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });
  return (
    <Fragment>
      <div ref={contentRef} className="invoice-1">
        <table className="table-wrapper ">
          <tbody>
            <tr>
              <InvoiceHeader />
            </tr>
            <tr>
              <InvoiceBackImage />
            </tr>
            <tr>
              <InvoiceContent />
            </tr>
            <tr>
              <InvoiceOrderDetails />
            </tr>
            <tr style={{ width: "100%", display: "flex", justifyContent: " space-between", marginTop: "12px" }}>
              <InvoiceSign />
              <td>
                <InvoiceButtons handlePrint={handlePrint} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default Invoice1Container;
