import { VerticalValidationWizardFormPropsType } from '@/Types/FormType'
import React from 'react'
import { TabContent, TabPane } from 'reactstrap'
import CartInfoForm from './CartInfoForm'
import NetBankingForm from './NetBankingForm'
import YourInfoForm from './YourInfoForm'

const VerticalValidationWizardTabComponent: React.FC<VerticalValidationWizardFormPropsType> = ({activeCallBack, activeTab}) => {
  return (
    <TabContent activeTab={activeTab}>
        <TabPane tabId={1}>
            <YourInfoForm activeCallBack={activeCallBack}/>
        </TabPane>
        <TabPane tabId={2}>
            <CartInfoForm activeCallBack={activeCallBack}/>
        </TabPane>
        <TabPane tabId={3}>
            <NetBankingForm />
        </TabPane>
    </TabContent>
  )
}

export default VerticalValidationWizardTabComponent
