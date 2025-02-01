import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { SingleFileUploads } from '@/Constant'
import { FileUploadData } from '@/Data/BonusUi/Dropzone'
import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonFileUpload from './Common/CommonFileUpload'

const SingleFileUpload = () => {
  return (
    <Col lg='6'>
        <Card>
            <CommonCardHeader title={SingleFileUploads} span={FileUploadData} headClass='pb-0' spanClass='mt-1 mb-0'/>
            <CommonFileUpload/>
        </Card>
    </Col>
  ) 
}

export default SingleFileUpload
