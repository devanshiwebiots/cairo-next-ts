import { Code, FontSize, Heading } from '@/Constant'
import React from 'react'
import { CardBody, Table } from 'reactstrap'

const HeadingsBody = () => {
  return (
   <thead>
     <tr>
        <th className='pt-0'>{Code}</th>
        <th className="pt-0">{FontSize}</th>
        <th className="pt-0">{Heading}</th>
     </tr>
   </thead>
  )
}

export default HeadingsBody
