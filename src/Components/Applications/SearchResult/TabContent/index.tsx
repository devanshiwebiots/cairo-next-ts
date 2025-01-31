import { SearchTabContentProp } from '@/Types/SearchResultType'
import React from 'react'
import { TabContent, TabPane } from 'reactstrap'
import AllTabs from './AllTabs'
import PhotosTab from './PhotosTab'
import VideoTab from './VideoTab'

const SearchTabContent: React.FC<SearchTabContentProp> = ({activeTab}) => {
  return (
    <TabContent activeTab={activeTab}>
        <TabPane tabId={1} className='search-links'>
            <AllTabs />
        </TabPane>
        <TabPane tabId={2}>
            <PhotosTab />
        </TabPane>
        <TabPane tabId={3}>
            <VideoTab />
        </TabPane>
    </TabContent>
  ) 
}

export default SearchTabContent
