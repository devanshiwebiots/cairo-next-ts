import { Fragment } from "react";
import InvoiceFooter from "./InvoiceFooter";
import InvoiceSixTableBody from "./InvoiceSixTableBody";
import InvoiceSixTableHeader from "./InvoiceSixTableHeader";
import InvoiceTotal from "./InvoiceTotal";

const InvoiceSixTable = () => {
  return (
    <Fragment>
      <div className="table-responsive custom-scrollbar custom-scrollbar invoice-table" id="table">
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <InvoiceSixTableHeader />
            </tr>
            <InvoiceSixTableBody />
            <tr>
              <InvoiceTotal />
            </tr>
          </tbody>
        </table>
      </div>
      <InvoiceFooter />
    </Fragment>
  );
};

export default InvoiceSixTable;
