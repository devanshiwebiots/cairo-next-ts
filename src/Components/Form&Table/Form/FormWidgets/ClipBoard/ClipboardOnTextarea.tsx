import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ClipboardOnTextareas, clipBoardTextParagraph, Copy, Cut, CutCopyFromTextarea } from '@/Constant';
import { useState } from 'react';
// import CopyToClipboard from 'react-copy-to-clipboard';
import { Button, Card, CardBody, Col, Input } from 'reactstrap';

const ClipboardOnTextarea = () => {
  const [clipBoardValues, setClipBoardValues] = useState({ value: clipBoardTextParagraph, copied: false });

  return (
   <Col sm='12' md='6'>
    <Card>
        <CommonCardHeader title={ClipboardOnTextareas} headClass='pb-0'/>
        <CardBody>
            <div className='clipboaard-container'>
                <p className='f-16'>{CutCopyFromTextarea}</p>
                <Input className='theme-scrollbar f-14' type='textarea' rows={2} spellCheck='false' value={clipBoardValues.value} onChange= {({target : {value}}) => setClipBoardValues({ value, copied: false})}/>
                <div className='mt-3 text-end'>
                    {/* <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({ value, copied: true})}>
                        <Button color='warning' className='btn-clipboard me-2'><i className="fa fa-copy"/> {Copy}</Button>
                    </CopyToClipboard>

                    <CopyToClipboard text={clipBoardValues.value} onCopy={(value) =>setClipBoardValues({ copied: true, value: ''})}>
                        <Button color='success' className='btn-clipboard-cut'><i className="fa fa-cut"/> {Cut}</Button>
                    </CopyToClipboard> */}
                </div>
            </div>
        </CardBody>
    </Card>
   </Col>
  )
}

export default ClipboardOnTextarea
