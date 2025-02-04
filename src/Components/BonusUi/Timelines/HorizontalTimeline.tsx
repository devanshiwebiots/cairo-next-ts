import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HorizontalTimelines, Href, ReadMore } from "@/Constant";
import { HorizontalTimeLineData, HorizontalTimeLineDataList } from "@/Data/BonusUi/TimeLine";
import { HorizontalTimelineProp } from "@/Types/BonusUiType";
import { Button, Card, CardBody, Col, ListInlineItem, Row } from "reactstrap";

const HorizontalTimeline = () => {
  return (
    <Col xxl="8" xl="7" className="box-col-12">
      <Card>
        <CommonCardHeader title={HorizontalTimelines} span={HorizontalTimeLineData} spanClass='mt-1 mb-0' headClass="pb-0"/>
        <CardBody>
          {HorizontalTimeLineDataList.map(({ mainClass, child }: HorizontalTimelineProp, index) => (
            <Row className={`list-inline events timeline-list ${mainClass}`} key={index}>
              {child.map(({ colClass, color, date, header, paragraph, verticalLine1, verticalLine2 }, index) => (
                <Col xxl="4" className={colClass} key={index}>
                  <div>
                    {verticalLine2 && <div className={verticalLine2}></div>}
                    <ListInlineItem className="event-list">
                      <div className="px-4">
                        <div className={`event-date alert-light-${color} txt-${color}`}>{date}</div>
                        <h5>{header} </h5>
                        <p className="f-light text-truncate">{paragraph}</p>
                        <div className="read-more-btn"><Button color="primary" tag="a" href={Href} className="px-3">{ReadMore}</Button></div>
                      </div>
                    </ListInlineItem>
                    {verticalLine1 && <div className={verticalLine1}></div>}
                  </div>
                </Col>
              ))}
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalTimeline;
