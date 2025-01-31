import { Col, Row } from "reactstrap";
import HobbiesAndInterests from "./HobbiesAndInterests";
import EducationAndEmployment from "./EducationAndEmployment";
import PeopleYouMayKnow from "./PeopleYouMayKnow copy";
import ActivityLog from "./ActivityLog";
import LeftBar from "../../common/LeftBar";
import RightBar from "../../common/RightBar";
 

const AboutTab = () => {
  return (
    <Row>
      <Col xl="3" lg="12" md="5" className="xl-40 box-col-4e">
        <div className="default-according style-1 faq-accordion job-accordion">
          <LeftBar />
        </div>
      </Col>
      <Col xl="6" lg="12" md="7" className="xl-60 box-col-8" >
        <Row>
          <PeopleYouMayKnow heading={"Pepole You May Know"} />
          <HobbiesAndInterests />
          <EducationAndEmployment />
          <PeopleYouMayKnow heading={"Viewed Your Profile"} />
          <ActivityLog />
        </Row>
      </Col>
      <Col xl="3" className="xl-100 box-col-12">
        <div className="default-according style-1 faq-accordion job-accordion">
          <Row>
            <RightBar />
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default AboutTab;
