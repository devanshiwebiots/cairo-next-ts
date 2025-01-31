import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { EditorsText, InlineEditors } from "@/Constant";
import { LoremText } from "@/Data/Editors";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";

const InlineEditor = () => {
  const [editing, setEditing] = useState(false);
  const showEditor = () => setEditing(!editing);
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={InlineEditors} headClass="pb-0" />
        <CardBody>
          {editing ? (
            <Fragment>
              <CKEditor editor={ClassicEditor} data={LoremText} />
              <Button color="light" className="mt-2" onClick={() => setEditing(false)}>{`Hide`}</Button>
            </Fragment>
          ) : (
            <div onClick={showEditor}>
              <h1>{EditorsText}</h1>
              <p>{LoremText}</p>
            </div>
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default InlineEditor;
