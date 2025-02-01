import CommonCardHeader from '@/CommonComponent/CommonCardHeader';
import { ClipboardOnTextareas, Copy, Cut, CutCopyFromTextarea } from '@/Constant';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Card, CardBody, Col, Input } from 'reactstrap';

const ClipboardOnTextarea = () => {
  const clipBoardTextParagraph: string = "A web designer must always enhance their work since creating websites is a creative effort. Therefore, a web designer must be more imaginative to produce exceptional results. Blogs about web design assist web designers in learning about new technologies, offer lessons, news, direction for a freebie, and much more. These blogs allow web designers to stay creative and improve their abilities. Therefore, advice from web design blogs is required to improve your business.";
  const [clipBoardValues, setClipBoardValues] = useState({ value: clipBoardTextParagraph, copied: false });
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(clipBoardValues.value);
      setClipBoardValues({ value: clipBoardValues.value, copied: true });
    } catch (err) {
      toast.error("Failed to copy text: " + err);
    }
  };

  const handleCut = async () => {
    try {
      await navigator.clipboard.writeText(clipBoardValues.value);
      setClipBoardValues({ value: "", copied: false });
    } catch (err) {
      toast.error("Failed to cut text: " + err);
    }
  };

  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={ClipboardOnTextareas} headClass="pb-0" />
        <CardBody>
          <div className="clipboaard-container">
            <p className="f-16">{CutCopyFromTextarea}</p>
            <Input className="theme-scrollbar f-14" type="textarea" rows={2} spellCheck="false" value={clipBoardValues.value} onChange={({ target: { value } }) => setClipBoardValues({ value, copied: false })} />
            <div className="mt-3 text-end">
                        <Button color='warning' className='btn-clipboard me-2' onClick={handleCopy}><i className="fa fa-copy"/> {Copy}</Button>

                        <Button color='success' className='btn-clipboard-cut' onClick={handleCut}><i className="fa fa-cut"/> {Cut}</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

export default ClipboardOnTextarea
