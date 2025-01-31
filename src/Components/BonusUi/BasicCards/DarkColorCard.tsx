import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DarkColorCards, FooterCard, ImagePath, SmartHeadphones } from "@/Constant";
import { DarkColorData, DarkColorText1 } from "@/Data/BonusUi/BasicCard";
import Image from "next/image";
import { Card, CardBody, CardFooter, Col } from "reactstrap";

const DarkColorCard = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={DarkColorCards} span={DarkColorData} spanClass="mt-1 mb-0 text-light" headClass="pb-0 bg-dark " tagClass="text-light" />
        <CardBody className="bg-dark">
          <div className="d-flex align-items-center gap-3 pills-blogger ">
            <div className="blog-wrapper">
              <Image className="blog-img" src={`${ImagePath}/dashboard-2/headphones.png`} alt="head-phone" width={100} height={100} />
            </div>
            <div className="blog-content">
              <p>
                <em className="txt-danger fw-bold">{SmartHeadphones}</em>
                {DarkColorText1}
              </p>
            </div>
          </div>
        </CardBody>
        <CardFooter className="bg-dark">
          <h6 className="text-white mb-0">{FooterCard}</h6>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default DarkColorCard;
