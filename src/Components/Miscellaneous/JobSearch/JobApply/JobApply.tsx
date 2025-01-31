import { Href, ImagePath, JobCancelButton, JobPersonalDetails, JobSubmitButton, JobUIDesigner, JobUploadYourFiles, JobYourEducation, JobYourExperience } from "@/Constant";
import Link from "next/link";
import React from "react";
import { Rating } from "react-simple-star-rating";
import { Button, Card, CardBody, CardFooter } from "reactstrap";
import EducationClass from "./EducationClass";
import ExperienceClass from "./ExperienceClass";
import PersonalDetail from "./PersonalDetail";
import UploadFile from "./UploadFile";
import RatioImage from "@/CommonComponent/RatioImage";

const JobApply = () => {
  return (
    <Card>
      <div className="job-search">
        <CardBody className="pb-0">
          <div className="d-flex">
            <RatioImage className="img-40 b-r-0 img-fluid  m-r-20" src={`${ImagePath}/job-search/1.jpg`} alt="" />
            <div className="flex-grow-1">
              <h6>
                <Link href={Href}>{JobUIDesigner}</Link>
                <span className="pull-right">
                  <Button color="primary">
                    <span>
                      <i className="fa fa-check text-white" />
                    </span>
                    Save this job
                  </Button>
                </span>
              </h6>
              <p>
                Save this job <Rating className="ms-1" fillColor={"warning"} initialValue={Math.random() * 5} size={15} />
              </p>
            </div>
          </div>
          <div className="job-description">
            <h4 className="mb-0">{JobPersonalDetails}</h4>
            <PersonalDetail />
            <h4 className="mb-0">{JobYourEducation}</h4>
            <EducationClass />
            <h4 className="mb-0">{JobYourExperience}</h4>
            <ExperienceClass />
            <h4 className="mb-0">{JobUploadYourFiles}</h4>
            <UploadFile />
          </div>
        </CardBody>
        <CardFooter>
          <Button color="primary mx-1">{JobSubmitButton}</Button>
          <Button color="light">{JobCancelButton}</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default JobApply;
