import { Fragment } from 'react'

const InvoiceAmount = () => {
  return (
    <Fragment>
    <td> </td>
    <td> </td>
    <td style={{ padding: "10px 0" }}>
      <span style={{ fontWeight: 600 }}>Amount Due (USD)</span>
    </td>
    <td style={{ padding: "10px 0", textAlign: "right" }}>
      <span style={{ fontWeight: 600 }}>$27,000.00</span>
    </td>
  </Fragment>
  )
}

export default InvoiceAmount
