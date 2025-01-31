import { InvoiceOrderDetailsData } from '@/Data/Invoice'
import { Fragment } from 'react'
import InvoiceAmount from './InvoiceAmount'
import InvoiceSubTotal from './InvoiceSubTotal'
import InvoiceTax from './InvoiceTax'

const InvoiceOrderDetailsBody = () => {
  return (
    <Fragment>
     {InvoiceOrderDetailsData.map(({title, price, color, qty, totalPrice}, index) => (
        <tr key={index} style={{boxShadow:'0px 10.9412px 10.9412px rgba(1, 93, 190, 0.02), 0px 9.51387px 7.6111px rgba(82, 77, 141, 0.06), 0px 5.05275px 4.0422px rgba(82, 77, 141, 0.0484671)', borderRadius:' 5.47059px'}}>
            <td style={{padding:"18px 15px", display:'flex', alignItems:"center", gap:'10px'}}>
                <span style={{minWidth:"7px", height:'7px', border:`4px solid ${color}`, backgroundColor:"#fff", borderRadius:'100%', display:"inline-block"}}></span>
                <span>{title}</span>
            </td>
            <td style={{padding:'18px 15px'}}><span>{price}</span></td>
            <td style={{padding:'18px 15px'}}><span>{qty}</span></td>
            <td style={{padding:'18px 15px', textAlign:'right'}}><span>{totalPrice}</span></td>
        </tr>
     ))}
     <tr>
      <InvoiceSubTotal />
     </tr>
     <tr>
       <InvoiceTax />
     </tr>
     <tr>
      <InvoiceAmount />
     </tr>
    </Fragment>
  )
}

export default InvoiceOrderDetailsBody
