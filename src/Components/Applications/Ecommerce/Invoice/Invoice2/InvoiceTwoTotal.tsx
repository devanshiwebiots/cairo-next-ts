import React from "react";

const InvoiceTwoTotal = () => {
  return (
    <td>
      <table style={{ float: "right" }}>
        <tfoot>
          <tr>
            <td style={{ padding: "5px 24px 5px 0", paddingTop: "15px", textAlign: "end" }}>
              <span style={{ color: "#52526C", fontSize: "18px", fontWeight: "400" }}>Subtotal </span>
              <span style={{ marginLeft: "8px", fontSize: "18px" }}>:</span>
            </td>
            <td style={{ padding: "5px 0", textAlign: "left", paddingTop: "15px" }}>
              <span style={{ fontSize: "18px" }}>$26,400.00</span>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "5px 24px 5px 0", textAlign: "end" }}>
              <span style={{ color: "#52526C", fontSize: "18px", fontWeight: "400" }}>VAT (0%) </span>
              <span style={{ marginLeft: "8px", fontSize: "18px" }}>:</span>
            </td>
            <td style={{ padding: "5px 0", textAlign: "left", paddingTop: "0" }}>
              <span style={{ fontSize: "18px" }}>$0.00</span>
            </td>
          </tr>
          <tr>
            <td style={{padding:'5px 24px 5px 0', textAlign:"end"}}>
            <span style={{ color: "#52526C", fontSize: "18px", fontWeight: "400" }}>Shipping Rate </span>
            <span style={{ marginLeft: "8px", fontSize: "18px" }}>:</span>
            </td>
            <td style={{ padding: "5px 0", textAlign: "left", paddingTop: "0" }}>
              <span style={{ fontSize: "18px" }}>$10.00</span>
            </td>
          </tr>
          <tr>
            <td style={{padding:"12px 24px 22px 0"}}>
                <span style={{fontWeight:'500', fontSize:'20px', color:'rgba(0, 2, 72, 1)'}}>Total Amount</span>
                <span style={{marginLeft: "8px"}}>:</span>
            </td>
            <td style={{padding:'12px 24px 22px 0', textAlign:'right'}}>
                <span style={{fontWeight:'500', fontSize:"20px", color: '#015DBE'}}>$26,410.00</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </td>
  );
};

export default InvoiceTwoTotal;
