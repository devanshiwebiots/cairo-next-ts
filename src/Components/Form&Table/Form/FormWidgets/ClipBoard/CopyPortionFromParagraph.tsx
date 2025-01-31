import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ClipBoardCopy, CopyHighLightedText, CopyPortionFromParagraphs, HighlightText } from '@/Constant';
import React, { useState } from 'react'
// import CopyToClipboard from 'react-copy-to-clipboard';
import { Button, Card, CardBody, Col } from 'reactstrap';

const CopyPortionFromParagraph = () => {
    const [highlightTextValue, setHighlightTextValue] = useState({ value: "Web design is the process of creating websites", copied: false });
  return (
   <Col sm='12' md='6'>
    <Card>
        <CommonCardHeader title={CopyPortionFromParagraphs} headClass='pb-0'/>
        <CardBody>
            <div className='clipboaard-container'>
                <p className='f-16'>{ClipBoardCopy}</p>
                <h6 className='border rounded card-body f-w-400'>
                <span className="bg-primary text-white p-1">{HighlightText}</span>
                that are visible online. Take a website design course to learn how to create an appealing and responsive website. In the discipline of web design, there are degree, diploma, postgraduate degree, and certificate programmes. A web designer is responsible for a website's look, feel, and occasionally even content.
                </h6>
                <div className='mt-3 text-end'>
                    {/* <CopyToClipboard text={highlightTextValue.value} onCopy={(value) => setHighlightTextValue({ value, copied:true})}>
                        <Button color='secondary' className='btn-clipboard'>
                        <i className="fa fa-copy"/> {CopyHighLightedText}
                        </Button>
                    </CopyToClipboard> */}
                </div>
            </div>
        </CardBody>
    </Card>
   </Col>
  )
}

export default CopyPortionFromParagraph
