import { DescriptionMyGallery } from '@/Components/Miscellaneous/Gallery/GalleryDridDesc/DescriptionMyGallery'
import { ImageAbout } from '@/Constant'
import React, { Fragment } from 'react'
import { Row } from 'reactstrap'
import PagesSort from './PagesSort'

const PhotosTab = () => {
  return (
   <Fragment>
    <h4 className='mb-2'>{ImageAbout}</h4>
    <Row className='my-gallery gallery-with-description'>
        <DescriptionMyGallery />
    </Row>
    <PagesSort pageClass='start'/>
   </Fragment>
  )
}

export default PhotosTab
