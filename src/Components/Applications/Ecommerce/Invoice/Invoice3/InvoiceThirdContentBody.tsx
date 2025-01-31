import { InvoiceThirdContentBodyData } from '@/Data/Invoice'
import React, { Fragment } from 'react'

const InvoiceThirdContentBody = () => {
  return (
    <Fragment>
     {InvoiceThirdContentBodyData.map(({name, qty, price, subTotal, color}, index) => (
        <tr key={index}>
            <td style={{padding:'18px 15px 18px 0', display:'flex', alignItems:'center', gap:10, borderBottom:'1px solid #52526C4D'}}>
                <span style={{width:'3px', height:'37px', backgroundColor:`${color}`}}></span>
                <ul style={{padding: '0', margin:'0', listStyleType:'none'}}>
                    <li>
                        <h4 style={{fontWeight:500, margin:'4px 0', fontSize:18, color: '#000248'}}>{name}</h4>
                        <span style={{color: '#52526C', opacity:'0.8', fontSize:16}}>Regular License</span>
                    </li>
                </ul>
            </td>
            <td style={{padding:'18px 15px', width:'12%', textAlign:'center', borderBottom:'1px solid #52526C4D'}}>
                <span style={{color: '#52526C', opacity:"0.8"}}>{qty}</span>
            </td>
            <td style={{padding:'18px 15px', width:'12%', textAlign:'center', borderBottom:'1px solid #52526C4D'}}>
                <span style={{color: '#52526C', opacity:"0.8"}}>${price}</span>
            </td>
            <td style={{padding:'18px 15px', width:'12%', textAlign:'center', borderBottom:'1px solid #52526C4D'}}>
                <span style={{color: '#52526C', opacity:"0.8"}}>${subTotal}</span>
            </td>
        </tr>
     ))}
    </Fragment>
  )
}

export default InvoiceThirdContentBody
