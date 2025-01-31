import RatioImage from "@/CommonComponent/RatioImage";
import { AbsoluteCard, ImagePath } from "@/Constant";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const AbsoluteSecondaryCard = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="card-absolute">
        <CardHeader className="bg-secondary">
          <h5 className="txt-light">{AbsoluteCard}</h5>
        </CardHeader>
        <CardBody>
          <div className="d-flex list-behavior-1 align-items-center">
            <div className="flex-shrink-0">
              <RatioImage className="tab-img img-fluid" src={`${ImagePath}/blog/blog.jpg`} alt="home" />
            </div>
            <div className="flex-grow-1">
              <p className="mb-xl-0 mb-sm-4">
                Absolute Card is made by using <em className="txt-danger">flex-shrink-0, flex-grow-1 & card-absolute </em> classes. you can do any of your designs using these classes. Subtracting the total size of all the flex items from the size of the flex container yields the leftover space.
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AbsoluteSecondaryCard;
