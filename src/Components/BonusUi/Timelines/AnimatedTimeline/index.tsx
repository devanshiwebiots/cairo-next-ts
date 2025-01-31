import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AnimatedTimelines } from "@/Constant";
import { AnimatedTimelineData, timelineData } from "@/Data/BonusUi/TimeLine";
import { Card, CardBody, Col } from "reactstrap";

const AnimatedTimeline = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={AnimatedTimelines} span={AnimatedTimelineData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="overflow-hidden">
          <div className="animated-timeline">
            {timelineData.map((block) => (
              <div key={block.year} className="timeline-block">
                <div className="each-year">
                  <div className="title">{block.year}</div>
                  {block.events.map((event, index) => (
                    <div key={index} className="timeline-event">
                      <div className="timeline-desc">
                        <h5 className="pb-1">{event.title}:</h5>
                        <span>{event.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedTimeline;
