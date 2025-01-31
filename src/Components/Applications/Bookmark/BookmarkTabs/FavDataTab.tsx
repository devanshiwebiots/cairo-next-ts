import { Favorites } from '@/Constant'
import { useAppSelector } from '@/Redux/Hooks'
import React from 'react'
import { Card, CardBody, CardHeader, TabPane } from 'reactstrap'
import ViewBookmark from '../ViewBookmark'
import FavDataLoop from './FavDataLoop'

const FavDataTab = () => {
    const { gridView } = useAppSelector((state)=>state.bookmarkTab)
  return (
    <TabPane tabId={'2'}>
        <Card className='mb-0'>
            <CardHeader className='d-flex'>
                <h4 className='mb-0'>{Favorites}</h4>
                <ViewBookmark />
            </CardHeader>
            <CardBody>
                <div className={`details-bookmark text-center ${gridView ? "" : "list-bookmark"}`}>
                    <FavDataLoop />
                </div>
            </CardBody>
        </Card>
    </TabPane> 
  )
}

export default FavDataTab
