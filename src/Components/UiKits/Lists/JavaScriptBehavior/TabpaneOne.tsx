import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import React, { Fragment } from "react";

const TabpaneOne = () => {
  return (
    <Fragment>
      <div className="d-flex mb-xl-4 list-behavior-1">
        <div className="flex-shrink-0">
          <RatioImage className="tab-img img-fluid w-auto" src={`${ImagePath}/blog/img.png`} alt="home" />
        </div>
        <div className="flex-grow-1">
          <p className="mb-xl-0 mb-sm-4">We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration, Search Engine Optimization and other Internet Marketing, Renewal of Services timely and effectively.</p>
        </div>
      </div>
      <div className="d-xl-flex list-behavior-1">
        <div className="flex-grow-1">
          <p className="mb-0">When someone visits your homepage, your design should inspire them to stay. Therefore, your value proposition should be established on the homepage for visitors to select to stay on your website.Building trust, expressing value, and guiding visitors to the next step all depend on a page's design.</p>
        </div>
        <div className="flex-shrink-0">
          <RatioImage className="tab-img img-fluid w-auto" src={`${ImagePath}/blog/blog.jpg`} alt="home" />
        </div>
      </div>
    </Fragment>
  );
};

export default TabpaneOne;
