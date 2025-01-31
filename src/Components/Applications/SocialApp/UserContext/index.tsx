import { SocialAppTabContentProp } from "@/Types/UserProfile";
import React from "react";
import { Row, TabContent, TabPane } from "reactstrap";
import AllCards from "../../Users/UserCards/AllCards";
import AboutTab from "./AboutTab";
import TimeLineTab from "./TimeLineTab/TimeLineTab";
import { DescriptionMyGallery } from '@/Components/Miscellaneous/Gallery/GalleryDridDesc/DescriptionMyGallery'

const UserContext: React.FC<SocialAppTabContentProp> = ({ activeTab }) => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId={1}>
        <TimeLineTab />
      </TabPane>
      <TabPane tabId={2}>
        <AboutTab />
      </TabPane>
      <TabPane tabId={3}>
        <Row className="user-cards-items">
          <AllCards />
        </Row>
      </TabPane>
      <TabPane tabId={4}>
      <Row className='my-gallery gallery-with-description'>
        <DescriptionMyGallery />
    </Row>
      </TabPane>
    </TabContent>
  );
};

export default UserContext;
