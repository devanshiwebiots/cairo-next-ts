import { BillingAddress, Phone, ShippingAddress } from '@/Constant'
import React from 'react'

const InvoiceTwoBilling = () => {
  return (
    <td>
      <table className='w-100'>
        <tbody>
          <tr style={{padding:'28px 0', display:'block'}}>
            <td style={{width:'63%'}}>
              <span style={{color: '#52526C', opacity:'0.8', fontSize:'16px', fontWeight:'500'}}>{BillingAddress}</span>
              <h4 style={{fontWeight:'400', margin:'12px 0 6px 0', fontSize:'18px'}}>Brooklyn Simmons</h4>
              <span style={{width:'54%', display:'block', lineHeight:'1.5', color: "#52526C",opacity:'0.8', fontSize:'18px', fontWeight:"400"}}>2118 Thornridge Cir. Syracuse, Connecticut 35624, United State</span>
              <span style={{lineHeight:'2.6', color: '#52526C', opacity:"0.8", fontSize:'18px', fontWeight:'400'}}>{Phone} : (239) 555-0108</span>
            </td>
            <td>
              <span style={{color: '#52526C', opacity:'0.8',fontSize:'16px',fontWeight:'500'}}>{ShippingAddress}</span>
              <h4 style={{fontWeight:'400', margin:'12px 0 6px 0', fontSize:'18px'}}>Cameron Williamson</h4>
              <span style={{width:'95%', display:'block', lineHeight:'1.5', color: "#52526C",opacity:'0.8', fontSize:'18px', fontWeight:"400"}}>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
              <span style={{lineHeight:'2.6', color: '#52526C', opacity:"0.8", fontSize:'18px', fontWeight:'400'}}>{Phone} :  (219) 555-0114 </span>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  )
}

export default InvoiceTwoBilling
