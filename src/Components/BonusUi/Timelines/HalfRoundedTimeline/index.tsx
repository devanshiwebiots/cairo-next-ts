import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HalfRoundedTimelines } from "@/Constant";
import { HalfRoundedTimelineData, timelineList } from "@/Data/BonusUi/TimeLine";
import { Card, CardBody, Col } from "reactstrap";

const HalfRoundedTimeline = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={HalfRoundedTimelines} span={HalfRoundedTimelineData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody className="rounded-timeline">
          <div className="timeline">
            {timelineList.map((event, index) => (
              <div key={index} className={`container ${event.position}`}>
                <div className="date">{event.date}</div>
                <i className={`icon ${event.icon}`}></i>
                <div className="content">
                  <div className="timeline-wrapper">
                    <div className={`badge ${event.badgeClass}`}>{event.badge}</div>
                  </div>
                  <h4 className="mb-2">{event.title}</h4>
                  <p className="mb-0 f-light">{event.description}</p>
                  {event.audioSrc && (
                    <audio controls>
                      <source src={event.audioSrc} type="audio/ogg" />
                    </audio>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HalfRoundedTimeline;
