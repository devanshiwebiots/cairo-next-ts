import React from 'react'
import { Row } from 'reactstrap'
import PagesSort from '../PagesSort'
import VideoTab1 from './VideoTab1'
import VideoTab2 from './VideoTab2'

const VideoTab = () => {
  return (
   <Row>
    <VideoTab1 />
    <VideoTab2 />
    <PagesSort pageClass='start'/>
   </Row>
  )
}

export default VideoTab
