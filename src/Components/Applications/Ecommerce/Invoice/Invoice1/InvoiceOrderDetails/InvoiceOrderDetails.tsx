import React from 'react'
import InvoiceOrderDetailsBody from './InvoiceOrderDetailsBody'
import InvoiceOrderDetailsHeader from './InvoiceOrderDetailsHeader'

const InvoiceOrderDetails = () => {
  return (
     <td>
      <table className='order-details w-100' style={{borderCollapse:'separate', borderSpacing:'0 10px'}}>
        <thead>
          <InvoiceOrderDetailsHeader />
        </thead>
        <tbody>
          <InvoiceOrderDetailsBody />
        </tbody>
      </table>
     </td>
  )
}

export default InvoiceOrderDetails
