import { ShippingFormTabContentPropsType } from '@/Types/FormType'
import React from 'react'
import { TabContent, TabPane } from 'reactstrap'
import BillingForm from './BillingForm'
import PaymentForm from './PaymentForm'
import ShippingFormContent from './ShippingFormContent'
import SubmitShippingForm from './SubmitShippingForm'

const ShippingFormTabContent: React.FC<ShippingFormTabContentPropsType> = ({activeTab, callbackActive}) => {
  return (
    <TabContent className='dark-field shipping-content' activeTab={activeTab}>
        <TabPane tabId={1}>
            <BillingForm callbackActive={callbackActive}/>
        </TabPane>
        <TabPane tabId={2}>
            <ShippingFormContent callbackActive={callbackActive}/>
        </TabPane>
        <TabPane tabId={3}>
          <PaymentForm callbackActive={callbackActive}/>
        </TabPane>
        <TabPane tabId={4}>
          <SubmitShippingForm />
        </TabPane>
    </TabContent>
  )
}

export default ShippingFormTabContent
