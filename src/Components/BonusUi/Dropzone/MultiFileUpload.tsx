import CommonCardHeader from '@/CommonComponent/CommonCardHeader'
import { MultiFileUploads } from '@/Constant'
import { FileUploadData } from '@/Data/BonusUi/Dropzone'
import React from 'react'
import { Card, Col } from 'reactstrap'
import CommonFileUpload from './Common/CommonFileUpload'

const MultiFileUpload = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={MultiFileUploads} span={FileUploadData} headClass='pb-0' spanClass='mt-1 mb-0'/>
          <CommonFileUpload multiple /> 
      </Card>
    </Col>
  )
}

export default MultiFileUpload
