import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, WithoutShadowCards } from "@/Constant";
import { WithoutShadowCardDetails } from "@/Data/BonusUi/BasicCard";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const WithoutShadowCard = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="shadow-none border">
        <CommonCardHeader title={WithoutShadowCards} span={WithoutShadowCardDetails} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <div className="flex-space flex-wrap align-items-center">
            <Image className="tab-img" src={`${ImagePath}/avtar/3.jpg`} alt="profile" width={100} height={100} />
            <p>
              <strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United States- 33020
              <br />
              <strong>Mail Us: </strong> contact@us@gmail.com
              <br />
              <strong>Contact Number: </strong> (954) 357-7760
            </p>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithoutShadowCard;
