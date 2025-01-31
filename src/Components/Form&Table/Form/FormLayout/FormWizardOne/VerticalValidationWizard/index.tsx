import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { VerticalValidationWizardHeading } from '@/Constant';
import { VerticalValidationData } from '@/Data/Form& Table/Form';
import React, { useCallback, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';
import NavComponent from './NavComponent';
import VerticalValidationWizardTabComponent from './VerticalValidationWizardTabComponent';

const VerticalValidationWizard = () => {
    const [activeTab, setActiveTab] = useState(1);
    const activeCallBack = useCallback((tab: number) => {setActiveTab(tab)}, [])
  return (
    <Col md='12'>
        <Card>
            <CommonCardHeader title={VerticalValidationWizardHeading} span={VerticalValidationData} spanClass='mb-0 mt-1' headClass='pb-0'/>
            <CardBody>
                <div className='vertical-main-wizard'>
                    <Row className='g-3'>
                        <Col xxl='3' xl='4' xs='12'>
                            <NavComponent callbackActive={activeCallBack} activeTab={activeTab}/>
                        </Col>
                        <Col xxl='9' xl='8' xs='12'>
                            <VerticalValidationWizardTabComponent activeCallBack={activeCallBack} activeTab={activeTab}/>
                        </Col>
                    </Row>
                </div>
            </CardBody>
        </Card>
    </Col>
  )
}

export default VerticalValidationWizard
