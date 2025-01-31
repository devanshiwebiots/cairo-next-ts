import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Card, Col } from "reactstrap";
import CommonTourSocialMedia from "../Common/CommonTourSocialMedia";
import { FollowSection } from "./FollowSection";
import { InfoSection } from "./InfoSection";

const UserProfileFirstStyle = () => {
  return (
    <Col sm="12">
      <Card className="hovercard text-center">
        <div className="cardheader"></div>
        <div className="user-image">
          <div className="avatar">
            <Image alt="" src={`${ImagePath}/user/7.jpg`} className="step1" width={100} height={100} />
          </div>
          <div className="icon-wrapper">
            <i className="icofont icofont-pencil-alt-5 step2"></i>
          </div>
        </div>
        <div className="info">
          <InfoSection />
          <hr />
          <CommonTourSocialMedia className="step4" />
          <FollowSection />
        </div>
      </Card>
    </Col>
  );
};

export default UserProfileFirstStyle;
