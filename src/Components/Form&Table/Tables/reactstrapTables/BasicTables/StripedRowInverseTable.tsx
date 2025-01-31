import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { StripedRowWithInverseTables } from '@/Constant'
import { StripedRowBody, StripedRowData, StripedRowHead } from '@/Data/Form& Table/Table/Reactstrap'
import React from 'react'
import { Card, Col, Row } from 'reactstrap'
import CommonTable from '../Common/CommonTable'

const StripedRowInverseTable = () => {
  return (
    <Col sm='6'>
        <Card>
            <CommonCardHeader title={StripedRowWithInverseTables} headClass='pb-0' span={StripedRowData} spanClass='mt-1'/>
            <Row className='card-block'>
              <Col sm='12' lg='12' xl='12'>
                <CommonTable headData={StripedRowHead} strip tableClass='table-inverse'>
                  {StripedRowBody.map((data) => (
                    <tr key={data.id}>
                      <th scope='row'>{data.id}</th>
                      <td>{data.dessert}</td>
                      <td>{data.calories}</td>
                      <td>{data.fat}</td>
                      <td>{data.price}</td>
                    </tr>
                  ))}
                </CommonTable>
              </Col>
            </Row>
        </Card>
    </Col>
  ) 
}

export default StripedRowInverseTable
