import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CKEditorExample } from "@/Constant";
import { content } from "@/Data/Editors";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Card, CardBody, Col } from "reactstrap";

const Editor = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={CKEditorExample} headClass="pb-0" />
        <CardBody>
          <CKEditor editor={ClassicEditor} data={content} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Editor;
