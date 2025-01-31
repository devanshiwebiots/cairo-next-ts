import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ClipboardOnParagraphs, ClipBoardParaGraph, Copy, CopyFromParagraph } from '@/Constant';
import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button, Card, CardBody, Col } from 'reactstrap';

const ClipboardOnParagraph = () => {
    const [clipBoardValues, setClipBoardValues] = useState({ value: ClipBoardParaGraph, copied: false });
  return (
     <Col sm='12' md='6'>
        <Card>
            <CommonCardHeader title={ClipboardOnParagraphs} headClass='pb-0'/>
            <CardBody>
                <div className='clipboaard-container'>
                    <p className='f-16'>{CopyFromParagraph}</p>
                    <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({ value, copied:true})}>
                        <h6 className='border rounded card-body f-w-400'>{ClipBoardParaGraph}</h6>
                    </CopyToClipboard>

                    <div className='mt-3 text-end'>
                        <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({value, copied: true})}>
                            <Button className='btn-clipboard' color='info'>
                            <i className="fa fa-copy"/> {Copy}
                            </Button>
                        </CopyToClipboard>
                    </div>
                </div> 
            </CardBody>
        </Card>
     </Col>
  )
}

export default ClipboardOnParagraph
