import { Card, Col, Row } from "reactstrap";
import { CommonTourFooter } from "../Common/CommonTourFooter";
import CommonTourHeader from "../Common/CommonTourHeader";
import { SecondStyleAboutSection } from "./SecondStyleAboutSection";
import { SocialMediaSection } from "./SocialMediaSection";

const UserProfileSecondStyle = () => {
  return (
    <Col sm="12" >
      <Card>
        <div className="profile-img-style">
          <Row className="g-2 align-items-center">
            <CommonTourHeader date="25 Jan" time="1 min read" />
            <SocialMediaSection />
          </Row>
          <hr />
          <SecondStyleAboutSection />
          <CommonTourFooter />
        </div>
      </Card>
    </Col>
  );
};

export default UserProfileSecondStyle;
