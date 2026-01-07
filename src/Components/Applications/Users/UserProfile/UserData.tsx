import { FollowSection } from "@/Components/BonusUi/Tour/UserProfileFirstStyle/FollowSection";
import { ImagePath } from "@/Constant";
import React from "react";
import { Card, Col } from "reactstrap";
import InfoSection from "./InfoSection";
import UserSocialMedia from "./UserSocialMedia";
import Image from "next/image";

const UserData = () => {
  return (
    <Col sm="12">
      <Card className="hovercard text-center user-profile-card">
        <div className="cardheader"></div>
        <div className="user-image">
          <div className="avatar">
            <Image alt="" src={`${ImagePath}/user/7.jpg`} width={86} height={86} unoptimized/>
          </div>
          <div className="icon-wrapper">
            <i className="icofont icofont-pencil-alt-5"></i>
          </div>
        </div>
        <div className="info">
            <InfoSection />
            <hr />
            <UserSocialMedia />
            <FollowSection />
        </div>
      </Card>
    </Col>
  );
};

export default UserData;
