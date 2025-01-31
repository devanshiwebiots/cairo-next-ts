import { Description, LineTotal, Qty, Rate } from '@/Constant'
import React from 'react'

const InvoiceOrderDetailsHeader = () => {
  return (
    <tr style={{background:'#015DBE', borderRadius: "5.47059px", overflow:'hidden', boxShadow:' 0px 10.9412px 10.9412px rgba(1, 93, 190, 0.02), 0px 9.51387px 7.6111px rgba(82, 77, 141, 0.06), 0px 5.05275px 4.0422px rgba(82, 77, 141, 0.0484671)',}}>
        <th style={{padding:'18px 15px', borderTopLeftRadius:'8px', borderBottomLeftRadius:'8px', textAlign:'left',}}>
            <span style={{color:"#fff"}}>{Description}</span>
        </th>
        <th style={{padding:'18px 15px', textAlign:'left'}}>
            <span style={{color: '#fff'}}>{Rate}</span>
        </th>
        <th style={{padding:'18px 15px', textAlign:'left'}}>
            <span style={{color: '#fff'}}>{Qty}</span>
        </th>
        <th style={{padding:'18px 15px', borderTopRightRadius:'8px', borderBottomRightRadius:'8px', textAlign:'right'}}>
            <span style={{color:'#fff'}}>{LineTotal}</span>
        </th>
    </tr>
  )
}

export default InvoiceOrderDetailsHeader
