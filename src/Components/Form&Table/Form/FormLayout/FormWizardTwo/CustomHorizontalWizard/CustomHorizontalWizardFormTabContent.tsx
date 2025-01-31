import { BusinessFormCommonProps } from '@/Types/FormType'
import React from 'react'
import { TabContent, TabPane } from 'reactstrap'
import FinishForm from '../../FormWizardOne/NumberingWizard/FinishForm'
import BankInfoForm from './BankInfoForm'
import InquiresForm from './InquiresForm'
import PersonalInfoForm from './PersonalInfoForm'

const CustomHorizontalWizardFormTabContent: React.FC<BusinessFormCommonProps> = ({activeTab,callbackActive,differentId}) => {
  return (
    <TabContent className='dark-field' activeTab={activeTab}>
        <TabPane tabId={1}>
            <PersonalInfoForm callbackActive={callbackActive}/>
        </TabPane>
         <TabPane tabId={2}>
        <BankInfoForm callbackActive={callbackActive}  />
         </TabPane>
         <TabPane tabId={3}>
          <InquiresForm callbackActive={callbackActive} differentId={differentId}/>
         </TabPane>
         <TabPane tabId={4}>
        <FinishForm/>
      </TabPane>
    </TabContent>
  ) 
}

export default CustomHorizontalWizardFormTabContent
