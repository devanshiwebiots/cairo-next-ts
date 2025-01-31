import React, { Fragment } from 'react'
import { AgencyExperience, JobDescriptionHeading, Perks, Qualifications, SaveThisJob, Share } from "@/Constant";
import { Button } from "reactstrap";
import { AgencyExpData, JobDetail, PearksData, QualificationData } from '@/Data/JobSearch';

const JobDescription = () => {
  return (
   <Fragment>
    <div className="job-description">
        <h5 className="mb-2">{JobDescriptionHeading}</h5>
        <p className="text-start">{JobDetail}</p>
      </div>
      <div className="job-description">
        <h5 className="mb-2">{Qualifications}</h5>
        <ul>
          {QualificationData.map((data, index) => (<li key={index}>{data}</li>))}
        </ul>
      </div>
      <div className="job-description">
        <h5 className="mb-2">{AgencyExperience}</h5>
        <ul>
          {AgencyExpData.map((data, index) => (<li key={index}>{data}</li>))}
        </ul>
      </div>
      <div className="job-description">
        <h5 className="mb-2">{Perks}</h5>
        <ul className="simple-list list-styled">
          {PearksData.map((data, index) => (<li key={index}>{data}</li>))}
        </ul>
      </div>
      <div className="job-description">
        <Button color="primary" className="mx-1"><span><i className="fa fa-check"></i></span>{SaveThisJob}</Button>
        <Button color="primary"><span><i className="fa fa-share-alt"></i></span>&nbsp;{Share}</Button>
      </div>
   </Fragment>
  )
}

export default JobDescription
