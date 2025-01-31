import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import RatioImage from "@/CommonComponent/RatioImage";
import { HorizontalScrollbars, ImagePath } from "@/Constant";
import { HorizontalScrollData, HorizontalScrollDataList } from "@/Data/BonusUi/Scrollable";
import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col, Row } from "reactstrap";

const HorizontalScrollbar = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={HorizontalScrollbars} span={HorizontalScrollData} spanClass='mt-1 mb-0' headClass="pb-0"/>
        <CardBody>
          <ScrollBar className="horizontal-scroll scroll-demo" style={{ width: "100%", height: "300px" }}>
            <div className="horz-scroll-content">
              <Row>
                <div className="col-2">
                  <div className="horizontal-img"><RatioImage className="img-fluid" src={`${ImagePath}/scrollbar/fashion1.jpg`} alt="girl" /></div>
                </div>
                {HorizontalScrollDataList.map((src, index) => (
                  <div className="col-2" key={index}>
                    <div className="horizontal-img"><RatioImage className="img-fluid" src={`${ImagePath}/${src}`} alt="girl"/></div>
                  </div>
                ))}
              </Row>
            </div>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalScrollbar;
