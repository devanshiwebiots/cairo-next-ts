import RatioImage from "@/CommonComponent/RatioImage";
import { Href, ImagePath, StarColorTwo } from "@/Constant";
import { JobData } from "@/Data/JobSearch";
import Link from "next/link";
import React, { Fragment } from "react";
import { Rating } from "react-simple-star-rating";
import { Badge, Card, CardBody, Col } from "reactstrap";

const CardsClass = () => {
  return (
    <Fragment>
      {JobData &&
        JobData.map((item) => (
          <Col xl="6" className="xl-100" key={item.id}>
            <Card className={`${item.ribbons ? "ribbon-vertical-left-wrapper" : ""}`}>
              {item.ribbons ? (
                <div className={`ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary ${!item.ribbons && "d-none"}`}>
                  <i className="icofont icofont-love"></i>
                </div>
              ) : (
                " "
              )}
              <div className="job-search">
                <CardBody>
                  <div className="d-flex">
                    <RatioImage src={`${ImagePath}/${item.logo}`} className="img-40 b-r-0 img-fluid m-r-20" />
                    <div className="flex-grow-1">
                      <h6>
                        <Link href={Href}>{item.job_name}</Link>
                        {item.type === "new" ? (
                          <Badge color="primary" className="pull-right">
                            {item.badgeValue}
                          </Badge>
                        ) : (
                          <span className="pull-right">{item.type}</span>
                        )}
                      </h6>
                      <p>
                        {item.job_area}, {item.job_city}
                        <span>
                          <Rating className="ms-1 font-warning" fillColor={'warning'} initialValue={Math.random() * 5} size={14} />
                        </span>
                      </p>
                    </div>
                  </div>
                  <p>{item.Job_description}</p>
                </CardBody>
              </div>
            </Card>
          </Col>
        ))}
    </Fragment>
  );
};

export default CardsClass;
