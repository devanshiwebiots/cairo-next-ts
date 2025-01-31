import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ShippingFormHeading } from '@/Constant';
import { ShippingFormData } from '@/Data/Form& Table/Form';
import React, { useCallback, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap';
import CurrentCart from './CurrentCart';
import NavComponent from './NavComponent';
import ShippingFormTabContent from './ShippingFormTabContent';

const ShippingForm = () => {
    const [activeTab, setActiveTab] = useState<number | undefined >(1);
    const callback = useCallback((tab: number | undefined) => {
        setActiveTab(tab)
    },[])
  return (
     <Col m='12'>
        <Card>
            <CommonCardHeader title={ShippingFormHeading} span={ShippingFormData} spanClass='mb-0 mt-1' headClass='pb-0'/>
            <CardBody>
                <Row className='shopping-wizard'>
                    <Col xs='12'>
                        <Row className='shipping-form g-5'>
                            <Col xl='8' className='shipping-border'>
                                <NavComponent callbackActive={callback} activeTab={activeTab}/>
                                <ShippingFormTabContent activeTab={activeTab} callbackActive={callback}/>
                            </Col>
                            <CurrentCart />
                        </Row>
                    </Col>
                </Row>
            </CardBody>
        </Card>
     </Col>
  )
}

export default ShippingForm
