import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath, Sizes } from "@/Constant";
import { SizeData, SizeImages } from "@/Data/Uikits/avatars";
import { Card, CardBody, Col } from "reactstrap";

const SizesCart = () => {
  return (
    <Col xl="4" md="6">
      <Card className="height-equal" style={{ minHeight: "227.219px" }}>
        <CommonUIkitsComponent title={Sizes} span={SizeData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar">
              <RatioImage src={`${ImagePath}/avtar/3.jpg`} className="img-100 rounded-circle" />
            </div>
            {SizeImages.map((data, i) => (
              <div key={i} className="avatar ms-1">
                <RatioImage src={`${ImagePath}${data.src}`} className={`${data.className} rounded-circle`} />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SizesCart;
