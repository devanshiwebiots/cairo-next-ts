import CommonUIkitsComponent from '@/CommonComponent/CommonUIkitsComponent'
import { Gridoptions } from '@/Constant'
import { GridOptionSpan } from '@/Data/Uikits/Grid'
import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import GridOptionsBody from './GridOptionsBody'
import GridOptionsHead from './GridOptionsHead'

const GridOptions = () => {
  return (
     <Col sm='12'>
        <Card>
            <CommonUIkitsComponent title={Gridoptions} span={GridOptionSpan} spanClass='mt-1 mb-0' headClass='pb-0'/>
            <CardBody>
                <div className='table-responsive custom-scrollbar'>
                    <table className='table table-bordered table-striped'>
                        <GridOptionsHead />
                        <GridOptionsBody />
                    </table>
                </div>
            </CardBody>
        </Card>
     </Col>
  )
}

export default GridOptions
