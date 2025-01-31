import { InvoiceSixTable } from '@/Data/Invoice'
import React, { Fragment } from 'react'

const InvoiceSixTableHeader = () => {
  return (
     <Fragment>
       {InvoiceSixTable.map((data, i) => (
        <td className="item" key={i}>
          <h5 className="p-2 mb-0">{data}</h5>
        </td>
      ))}
     </Fragment>
  )
}

export default InvoiceSixTableHeader
