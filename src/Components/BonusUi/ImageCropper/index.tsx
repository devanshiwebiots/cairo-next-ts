import { Container, Row } from "reactstrap";
import ImageCropper from "./ImageCropper";

const ImageCropperContainer = () => {
  return (
    <Container fluid>
      <Row>
        <ImageCropper />
      </Row>
    </Container>
  );
};

export default ImageCropperContainer;
