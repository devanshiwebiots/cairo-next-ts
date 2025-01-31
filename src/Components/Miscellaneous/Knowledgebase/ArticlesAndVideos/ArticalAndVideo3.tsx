import { ArticalAndVideoData1, ArticalAndVideoData2, ArticalAndVideoData3 } from '@/Data/Knowledgebase'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'

const ArticalAndVideo3 = () => {
  return (
   <Col xl='4' md='6'>
    <Row>
        {ArticalAndVideoData3.map((item, i) => (
            <Col sm='12' key={i}>
                <Card>
                    <CardBody>
                        <div className='d-flex'>
                            {item.iconClass}
                            <div className='flex-grow-1'>
                                <h5 className='pb-2'>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        ))}
    </Row>
   </Col>
  )
}

export default ArticalAndVideo3
