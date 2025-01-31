import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { GridColum } from '@/Constant'
import { GridForColumnsData, GridForColumnsSpan } from '@/Data/Uikits/Grid'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

const GridForColumns = () => {
  return (
    <Col sm='12'>
        <Card>
            <CommonUIkitsComponent title={GridColum} span={GridForColumnsSpan} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CardBody className='grid-showcase'>
              <Row>
                {GridForColumnsData.map((data,index) => (
                    <div className={`col-md-${data} text-center`} key={index}><span>col-md-{data}</span></div>
                ))}
              </Row>
            </CardBody>
        </Card>
    </Col>
  )
}

export default GridForColumns
