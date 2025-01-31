import { Container, Row } from "reactstrap";
import DefaultDropzone from "./DefaultDropzone";
import ImagePreview from "./ImagePreview";
import MultiFileUpload from "./MultiFileUpload";
import SingleFileUpload from "./SingleFileUpload";

const DropzoneContainer = () => {
  return (
    <Container fluid>
      <Row>
        <DefaultDropzone />
        <ImagePreview />
        <SingleFileUpload />
        <MultiFileUpload />
      </Row>
    </Container>
  );
};

export default DropzoneContainer;
