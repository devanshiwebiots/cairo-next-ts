import React, { useState } from 'react'
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { FilePond, registerPlugin } from 'react-filepond';
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { PreviewImage } from '@/Constant';
import { ImagePreviewData } from '@/Data/BonusUi/Dropzone';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const ImagePreview = () => {
    const [files, setFiles] = useState([]);
  return (
   <Col lg='6'>
    <Card>
        <CommonCardHeader title={PreviewImage} span={ImagePreviewData} spanClass='mt-1 mb-0' headClass='pb-0'/>
        <CardBody>
            <FilePond files={files} allowReorder={true} allowMultiple={true} maxFiles={1} onupdatefiles={() => setFiles} labelIdle='Drag & Drop your files or <span class="filepond--label-action text-danger text-decoration-none">Browse</span>' />
        </CardBody>
    </Card>
   </Col>
  )
}

export default ImagePreview
