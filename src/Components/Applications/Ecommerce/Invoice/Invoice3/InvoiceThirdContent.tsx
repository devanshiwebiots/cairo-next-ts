import React from 'react'
import InvoiceThirdContentBody from './InvoiceThirdContentBody'
import InvoiceThirdContentHead from './InvoiceThirdContentHead'

const InvoiceThirdContent = () => {
  return (
    <td>
        <table className='w-100' style={{borderSpacing:'0'}}>
            <thead>
                <InvoiceThirdContentHead />
            </thead>
            <tbody>
                <InvoiceThirdContentBody />
            </tbody>
        </table>
    </td>
  )
}

export default InvoiceThirdContent
