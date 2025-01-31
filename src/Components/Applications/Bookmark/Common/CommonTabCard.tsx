import { CommonTabCardProp } from '@/Types/BookmarkType'
import React from 'react'
import { Card, CardBody, CardHeader, TabPane } from 'reactstrap'
import SearchNotFoundClass from '../../Chat/PrivateChat/LeftSideBar/SearchNotFoundClass'
import ViewBookmark from '../ViewBookmark'

const CommonTabCard: React.FC<CommonTabCardProp> = ({tabId, title}) => {
  return (
    <TabPane tabId={tabId}>
        <Card className='mb-0'>
            <CardHeader className='d-flex pb-0'>
                <h4 className='mb-0'>{title}</h4>
                <ViewBookmark />
            </CardHeader>
            <CardBody>
                <SearchNotFoundClass word='Bookmark'/>
            </CardBody>
        </Card>
    </TabPane>
  )
}

export default CommonTabCard
