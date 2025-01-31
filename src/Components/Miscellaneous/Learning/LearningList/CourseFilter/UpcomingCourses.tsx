import { CourseBy, Href, StarColorTwo, UpcomingCourse } from "@/Constant";
import { UpcomingCourseData } from "@/Data/Learning";
import Link from "next/link";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Card, CardBody, Col, Collapse } from "reactstrap";
import CommonLearningHeader from "./Common/CommonLearningHeader";

const UpcomingCourses = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl="12">
      <Card>
        <CommonLearningHeader heading={UpcomingCourse} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <CardBody className="upcoming-course">
            {UpcomingCourseData.map((data, index) => (
              <div className="d-flex" key={index}>
                <div className="flex-grow-1">
                  <span className="f-w-600">{data.courseHeading}</span>
                  <span className="d-block">
                    {CourseBy}
                    <Link href={Href}>
                      {data.courseTeam}
                    </Link>
                  </span>
                  <span className="d-block">
                    <Rating className="ms-1" fillColor={StarColorTwo} initialValue={Math.random() * 5} size={20} />
                  </span>
                </div>
                <div>
                  <h5 className="mb-0 font-primary">{data.courseDate}</h5>
                  <span className="d-block">{data.courseMonth}</span>
                </div>
              </div>
            ))}
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default UpcomingCourses;
