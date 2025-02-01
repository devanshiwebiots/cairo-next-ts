import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import { InvoiceButtons } from '../Common/InvoiceButtons';
import InvoiceTwoBilling from './InvoiceTwoBilling';
import InvoiceTwoContent from './InvoiceTwoContent';
import InvoiceTwoDetails from './InvoiceTwoDetails';
import InvoiceTwoHeader from './InvoiceTwoHeader';
import InvoiceTwoTotal from './InvoiceTwoTotal';

const Invoice2Container = () => {
    const contentRef = useRef<HTMLDivElement | null>(null);

    const handlePrint = useReactToPrint({
      contentRef,
    });
    
  return (
    <div className="invoice-2" ref={contentRef}>
      <table style={{ width: "1070px", margin: "0 auto" }}>
        <tbody>
          <tr>
            <InvoiceTwoHeader />
          </tr>
          <tr>
            <InvoiceTwoDetails />
          </tr>
          <tr>
            <InvoiceTwoBilling />
          </tr>
          <tr>
            <InvoiceTwoContent />
          </tr>
          <tr>
            <InvoiceTwoTotal />
          </tr>
          <tr>
            <td>
              <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: "1px", width: "100%", marginBottom: "24px" }}></span>
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
}

export default Invoice2Container
