import { InvoiceThirdContentHeadData } from '@/Data/Invoice'
import React from 'react'

const InvoiceThirdContentHead = () => {
  return (
    <tr style={{background:'#015DBE'}}>
        <th style={{padding:'18px 15px', textAlign:'left'}}>
          <span style={{color: '#fff', fontSize:18, fontWeight:500}}>Description</span>
        </th>
        <th style={{padding:'18px 15px', textAlign:'center', borderInline:'3px solid #fff'}}>
          <span style={{color: '#fff', fontSize:18, fontWeight:500}}>Qty</span>
        </th>
        <th style={{padding:'18px 15px', textAlign:'center', borderRight:'3px solid #fff'}}>
          <span style={{color: '#fff', fontSize:18, fontWeight:500}}>Price</span>
        </th>
        <th style={{padding:'18px 15px', textAlign:'center'}}>
          <span style={{color: '#fff', fontSize:18, fontWeight:500}}>Subtotal</span>
        </th>
    </tr>
  )
}

export default InvoiceThirdContentHead
