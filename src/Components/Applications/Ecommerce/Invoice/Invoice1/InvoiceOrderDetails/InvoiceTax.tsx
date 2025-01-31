import { Fragment } from 'react'

const InvoiceTax = () => {
  return (
    <Fragment>
      <td> </td>
      <td> </td>
      <td style={{ padding: "5px 0", paddingTop: 0 }}>
        <span>Tax(5%)</span>
      </td>
      <td style={{ padding: "5px 0", textAlign: "right", paddingTop: 0 }}>
        <span>$1,000.00</span>
      </td>
    </Fragment>
  )
}

export default InvoiceTax
