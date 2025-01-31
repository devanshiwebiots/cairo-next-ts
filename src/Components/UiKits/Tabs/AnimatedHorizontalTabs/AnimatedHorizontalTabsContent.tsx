import { TabContentProp } from '@/Types/UikitsType'
import React from 'react'
import { TabContent, TabPane } from 'reactstrap'

const AnimatedHorizontalTabsContent:React.FC<TabContentProp> = ({basicTab}) => {
  return (
     <TabContent activeTab={basicTab}>
        <TabPane tabId={'1'}>
        <p className="pt-3">This is some placeholder content the <b>Home tab's </b>associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other. This tab provide animation with gradient hover effects and amazing smooth transition for your projects. Also tab has horizontal alignment and title with amazing icons.</p>
        </TabPane>
        <TabPane tabId={'2'}>
        <p className="pt-3">This is some placeholder content the <b>Profile tab's</b> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other. This tab provide animation with gradient hover effects and amazing smooth transition for your projects. Also tab has horizontal alignment and title with amazing icons.</p>
        </TabPane>
        <TabPane tabId={'3'}>
        <p className="pt-3">This is some placeholder content the <b>About tab's </b>associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other. This tab provide animation with gradient hover effects and amazing smooth transition for your projects. Also tab has horizontal alignment and title with amazing icons.</p>
        </TabPane>
        <TabPane tabId={'4'}>
        <p className="pt-3">This is some placeholder content the <b>Gallery tab's </b>associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other. This tab provide animation with gradient hover effects and amazing smooth transition for your projects. Also tab has horizontal alignment and title with amazing icons.</p>
        </TabPane>
        <TabPane tabId={'5'}>
        <p className="pt-3">This is some placeholder content the <b>FAQ tab's </b>associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other. This tab provide animation with gradient hover effects and amazing smooth transition for your projects. Also tab has horizontal alignment and title with amazing icons.</p>
        </TabPane>
     </TabContent>
  )
}

export default AnimatedHorizontalTabsContent
