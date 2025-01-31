import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HoveringTimelines } from "@/Constant";
import { HoveringTimeLineData } from "@/Data/BonusUi/TimeLine";
import { Card, CardBody, Col } from "reactstrap";
import { MeetupHoveringTimeline } from "./ MeetupHoveringTimeline";
import AnnualFunctionHoveringTimeline from "./AnnualFunctionHoveringTimeline";
import { InterviewHoveringTimeline } from "./InterviewHoveringTimeline";

const HoveringTimeline = () => {
  return (
    <Col xl="6">
      <Card className="height-equal" style={{ minHeight: "732.094px" }}>
        <CommonCardHeader title={HoveringTimelines} span={HoveringTimeLineData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="dark-timeline mb-4">
          <ul className="square-timeline simple-list">
            <AnnualFunctionHoveringTimeline />
            <InterviewHoveringTimeline />
            <MeetupHoveringTimeline />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HoveringTimeline;
