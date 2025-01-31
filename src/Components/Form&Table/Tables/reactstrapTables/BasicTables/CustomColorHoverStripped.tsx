import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { CustomColorHoverStrippedTitle } from '@/Constant'
import { CustomColorHoverStrippedBody, CustomColorHoverStrippedData, CustomColorHoverStrippedList } from '@/Data/Form& Table/Table/Reactstrap'
import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import CommonTable from '../Common/CommonTable'

const CustomColorHoverStripped = () => {
  return (
     <Col sm='12'>
        <Card>
            <CommonCardHeader title={CustomColorHoverStrippedTitle} span={CustomColorHoverStrippedData} spanClass='mt-1' headClass='p-0'/>
             <CommonTable headData={CustomColorHoverStrippedList} strip tableClass='bg-primary' headClass='tbl-strip-thad-bdr' hover>
                {CustomColorHoverStrippedBody.map((data) => (
                    <tr key={data.id}>
                        <th scope='row'>{data.id}</th>
                        <td>{data.filmTitle}</td>
                        <td>{data.released}</td>
                        <td>{data.studio}</td>
                        <td>{data.budget}</td>
                        <td>{data.domesticGross}</td>
                    </tr>
                ))}
             </CommonTable>
        </Card>
     </Col>
  )
}

export default CustomColorHoverStripped
