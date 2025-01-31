import { Href, ImagePath } from "@/Constant";
import { ProfileData } from "@/Data/Users";
import React from "react";
import { Card, Col } from "reactstrap";
import { CommonUserHeader } from "./Common/CommonUserHeader";
import { Gallery, Item } from "react-photoswipe-gallery";
import CommonUserFooter from "./Common/CommonUserFooter";

const FirstData = () => {
  return (
    <Col sm="12">
      <Card>
        <div className="profile-img-style">
          <CommonUserHeader />
          <p>{ProfileData}</p>
          <div className="img-container">
            <div className="my-gallery w-100" id="aniimated-thumbnials" itemScope>
              <Gallery withCaption>
                <figure className="m-0">
                  <Item original={`${ImagePath}/other-images/profile-style-img3.png`} width="1600" height="800" caption="Image Caption 1">
                    {({ ref, open }) => (
                      <a href={Href} onClick={open}>
                        <img className="img-fluid rounded" ref={ref as unknown as React.MutableRefObject<HTMLImageElement>} src={`${ImagePath}/other-images/profile-style-img3.png`} alt="image" />
                      </a>
                    )}
                  </Item>
                </figure>
              </Gallery>
            </div>
          </div>
          <CommonUserFooter />
        </div>
      </Card>
    </Col>
  );
};

export default FirstData;
