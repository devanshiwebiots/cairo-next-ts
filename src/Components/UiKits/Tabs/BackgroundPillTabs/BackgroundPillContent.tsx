import { ImagePath } from '@/Constant'
import { TabContentProp } from '@/Types/UikitsType'
import Image from 'next/image'
import React from 'react'
import { Col, Row, TabContent, TabPane } from 'reactstrap'

const BackgroundPillContent: React.FC<TabContentProp> = ({basicTab}) => {
  return (
     <TabContent activeTab={basicTab}>
        <TabPane tabId="1">
            <Row className='g-3 pt-3'>
                <Col className='col-4'><Image src={`${ImagePath}/switch/s1.jpg`} className='img-fluid' alt='image' width={236} height={245}/></Col>
                <Col className='col-4'><Image src={`${ImagePath}/switch/s2.jpg`} className='img-fluid' alt='image' width={236} height={245}/></Col>
                <Col className='col-4'><Image src={`${ImagePath}/switch/s3.jpg`} className='img-fluid' alt='image' width={236} height={245}/></Col>
            </Row>
        </TabPane>
        <TabPane tabId="2">
            <Row className='g-3 pt-3'>
                <Col className='col-4'><Image src={`${ImagePath}/switch/c1.jpg`} className='img-fluid' alt='image' width={236} height={245}/></Col>
                <Col className='col-4'><Image src={`${ImagePath}/switch/c2.jpg`} className='img-fluid' alt='image' width={236} height={245}/></Col>
                <Col className='col-4'><Image src={`${ImagePath}/switch/c3.jpg`} className='img-fluid' alt='image' width={236} height={245}/></Col>
            </Row>
        </TabPane>
        <TabPane tabId="3">
            <Row className='g-3 pt-3'>
                <Col className='col-4'><Image src={`${ImagePath}/switch/t1.jpg`} className='img-fluid' alt='image' width={236} height={245}/></Col>
                <Col className='col-4'><Image src={`${ImagePath}/switch/t2.jpg`} className='img-fluid' alt='image' width={236} height={245}/></Col>
                <Col className='col-4'><Image src={`${ImagePath}/switch/t3.jpg`} className='img-fluid' alt='image' width={236} height={245}/></Col>
            </Row>
        </TabPane>
     </TabContent>
  )
}

export default BackgroundPillContent
