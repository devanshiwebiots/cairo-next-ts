import React from 'react'
import InvoiceTwoContentBody from './InvoiceTwoContentBody'
import InvoiceTwoContentHead from './InvoiceTwoContentHead'

const InvoiceTwoContent = () => {
  return (
   <td>
     <table style={{width:'100%', borderCollapse:"separate", borderSpacing:'0', border: '1px solid rgba(82, 82, 108, 0.1)'}}>
        <thead>
            <InvoiceTwoContentHead />
        </thead>
        <tbody>
            <InvoiceTwoContentBody />
        </tbody>
     </table>
   </td>
  )
}

export default InvoiceTwoContent
