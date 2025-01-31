import { InvoiceTwoContentHeadData } from '@/Data/Invoice'
import React from 'react'

const InvoiceTwoContentHead = () => {
  return (
   <tr style={{background:'#015DBE', borderRadius:'5.47059px', overflow:'hidden', boxShadow:"0px 10.9412px 10.9412px rgba(1, 93, 190, 0.02), 0px 9.51387px 7.6111px rgba(82, 77, 141, 0.06), 0px 5.05275px 4.0422px rgba(82, 77, 141, 0.0484671)"}}>
     {InvoiceTwoContentHeadData.map((item,index) => (
        <th style={{padding:'18px 15px', textAlign:'left'}} key={index}>
            <span style={{color: '#fff', fontSize:'18px'}}>{item}</span>
        </th>
     ))}
   </tr>
  )
}

export default InvoiceTwoContentHead
