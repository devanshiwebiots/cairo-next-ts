import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImageCroppers } from "@/Constant";
import { ImageCroppersSpan } from "@/Data/BonusUi/ImageCoper";
import { Card, CardBody, Col } from "reactstrap";
import ImageCropperBody from "./ImageCropperBody";

export const ImageCropper = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={ImageCroppers} span={ImageCroppersSpan} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody>
          <ImageCropperBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImageCropper;
