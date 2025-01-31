import { InvoiceFourData } from "@/Data/Invoice";
import { Fragment } from "react";

const InvoiceTableBody = () => {
  return (
    <Fragment>
    {InvoiceFourData.map((data,i)=>(
      <tr key={i}>
        <td style={{ width: "12%", textAlign: "center", borderBottom: "1px dashed rgba(82, 82, 108, 0.2)", background: "#F5F6F9"}} >
          <span style={{ opacity: "0.8", fontWeight: 500 , color: '#52526C'}}>{i+1}</span>
        </td>
        <td style={{ padding: 16, borderBottom: "1px dashed rgba(82, 82, 108, 0.2)" }} >
          <h4 style={{ fontWeight: 500, margin: "4px 0px", fontSize: 18, }} >{data.title}</h4>
          <span style={{ opacity: "0.8", fontSize: 16, color: '#52526C' }}>{data.detail}</span>
        </td>
        <td style={{ width: "12%", textAlign: "center", borderBottom: "1px dashed rgba(82, 82, 108, 0.2)", background: "#F5F6F9" }} >
          <span style={{ fontWeight: 500 ,color: '#52526C'}}>${data.price}.00</span>
        </td>
        <td style={{ width: "12%", textAlign: "center", borderBottom: "1px dashed rgba(82, 82, 108, 0.2)" }} >
          <span style={{ fontWeight: 600 }}>{data.quantity}</span>
        </td>
        <td style={{ width: "12%", textAlign: "center", borderBottom: "1px dashed rgba(82, 82, 108, 0.2)", background: "#F5F6F9"}}>
          <span style={{ fontWeight: 600, opacity: "0.9" , color:'#000248'}} >${data.total}.00</span>
        </td>
      </tr>
    ))}
    </Fragment>
  );
};

export default InvoiceTableBody;
