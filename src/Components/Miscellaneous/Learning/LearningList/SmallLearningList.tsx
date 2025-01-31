import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import { SmallLearningListData } from "@/Data/Learning";
import { Fragment } from "react";
import { Card, Col } from "reactstrap";

const SmallLearningList = () => {
  return (
    <Fragment>
      {SmallLearningListData.map(({ img, skill, description }, index) => (
        <Col xl="4" sm="6" className="xl-50 box-col-6" key={index}>
          <Card>
            <div className="blog-box blog-grid text-center product-box">
              <div className="product-img">
                <RatioImage src={`${ImagePath}/faq/${img}`} className="img-fluid top-radius-blog" />
                <div className="product-hover">
                  <ul>
                    <li>
                      <i className="icon-link"></i>
                    </li>
                    <li>
                      <i className="icon-import"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog-details-main">
                <ul className="blog-social ">
                  <li>9 April 2018</li>
                  <li>by: Admin</li>
                  <li>0 Hits</li>
                </ul>
                <hr />
                <h5>{skill}</h5>
                <p className="blog-bottom-details">{description}</p>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default SmallLearningList;
