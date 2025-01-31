import React from 'react'
import InvoiceTableBody from './InvoiceTableBody'
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableTotal from './InvoiceTableTotal'

const InvoiceTable = () => {
  return (
    <td>
        <table style={{ width: "100%", borderSpacing: 0 }}>
            <thead>
                <InvoiceTableHeader />
            </thead>
            <tbody>
                <InvoiceTableBody />
                <InvoiceTableTotal />
            </tbody>
        </table>
    </td>
  )
}

export default InvoiceTable
