import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import { MainLearningData } from "@/Data/Learning";
import React, { Fragment } from "react";
import { Card, Col, Row } from "reactstrap";

const MainLearningList = () => {
  return (
    <Fragment>
      {MainLearningData.map(({img, learningCardBy, dateSpan, date, hits, skill, className, description}, index) => (
        <Col xl='12' key={index}>
            <Card>
                <Row className="blog-box blog-list">
                    <Col sm='5' className={className}>
                        <RatioImage src={`${ImagePath}/faq/${img}`} className='img-fluid sm-100-w'/>
                    </Col>
                    <Col sm='7'>
                        <div className="blog-details">
                            <div className="blog-date"><span>{dateSpan}</span> {date}</div>
                            <h4>{skill}</h4>
                            <div className="blog-bottom-content">
                                <ul className="blog-social">
                                    <li>by: {learningCardBy}</li>
                                    <li>{hits} Hits</li>
                                </ul>
                                <hr />
                                <p className="mt-0">{description}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default MainLearningList;
