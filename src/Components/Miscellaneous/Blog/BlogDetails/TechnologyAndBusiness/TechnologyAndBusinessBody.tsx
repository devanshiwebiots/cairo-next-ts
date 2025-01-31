import { TechnologyAndBusiness } from "@/Constant";
import { TechnologyAndBusinessListOne, TechnologyAndBusinessListThird, TechnologyAndBusinessListTwo } from "@/Data/Blog";
import { Fragment } from "react";
import { Button } from "reactstrap";

const TechnologyAndBusinessBody = () => {
  return (
    <Fragment>
      <h4>{TechnologyAndBusiness}</h4>
      <div className="post-social">
        <ul className="d-flex align-items-center">
          <li>25 March 2024</li>
          <li><i className="fa fa-user mx-1"></i>Admin</li>
          <li><i className="fa fa-comments mx-1"></i>12 Comments </li>
        </ul>
      </div>
      <div className="blog-share">
        <Button color="primary" ><i className="fa fa-share-alt"/></Button>
        <Button color="secondary" className="ms-1"><i className="fa fa-ellipsis-v"/></Button>
      </div>
      <p>{TechnologyAndBusinessListOne}</p>
      <div className="blog-quote"><i className="fa fa-quote-left"/>
       <p>{TechnologyAndBusinessListTwo}</p>
      </div>
      <p>{TechnologyAndBusinessListThird}</p>
    </Fragment>
  );
};

export default TechnologyAndBusinessBody;
