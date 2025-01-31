import { TabContentProp } from '@/Types/UikitsType'
import React from 'react'
import { Col, TabContent, TabPane } from 'reactstrap'
import TabPaneFour from './TabPaneFour'
import TabpaneOne from './TabpaneOne'
import TabPaneThird from './TabPaneThird'
import TabPaneTwo from './TabPaneTwo'

const JavaScriptBehaviorTabContent: React.FC<TabContentProp> = ({basicTab}) => {
  return (
    <Col sm='8'>
        <TabContent activeTab={basicTab} id='nav-tabContent'>
            <TabPane tabId={'1'}>
                <TabpaneOne />
            </TabPane>
            <TabPane tabId={'2'} className='dark-list'>
                <TabPaneTwo />
            </TabPane>
            <TabPane tabId={'3'}>
                <TabPaneThird />
            </TabPane>
            <TabPane tabId={'4'}>
                <TabPaneFour />
            </TabPane>
        </TabContent>
    </Col>
  )
}

export default JavaScriptBehaviorTabContent
