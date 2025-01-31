import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath, ImageSize } from "@/Constant";
import { ImageSizeRoundData, ImagesSizeData, ImagesSizesData } from "@/Data/Uikits/HelperClasses";
import { Card, CardBody, Col, Row } from "reactstrap";

const ImagesSizes = () => {
  return (
    <Col xl="6">
      <Card className="height-equal" style={{ minHeight: " 463.594px" }}>
        <CommonUIkitsComponent title={ImageSize} span={ImagesSizesData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <Col className="col-12">
              <div className="card-wrapper border rounded-3 h-100">
                <div className="gradient-border gap-3">
                  {ImagesSizeData.map((data, index) => (
                    <RatioImage className={`img-${data} img-h-${data}`} src={`${ImagePath}/blog/comment.jpg`} key={index} />
                  ))}
                </div>
              </div>
            </Col>
            <Col className="col-12">
              <div className="card-wrapper border rounded-3 h-100">
                <div className="gradient-border gap-3">
                  {ImageSizeRoundData.map((data,index) => (
                    <RatioImage className={`img-${data.size} img-h-${data.size} ${data.className}`} src={`${ImagePath}/blog/comment.jpg`} key={index}/>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImagesSizes;
