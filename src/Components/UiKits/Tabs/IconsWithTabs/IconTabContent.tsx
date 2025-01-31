import { EmailAddress, ImagePath } from "@/Constant";
import { TabContentProp } from "@/Types/UikitsType";
import Image from "next/image";
import { Input, Label, TabContent, TabPane } from "reactstrap";

export const IconTabContent:React.FC<TabContentProp> = ({basicTab}) => {
  return (
    <TabContent activeTab={basicTab}>
      <TabPane tabId="1">
        <p className="pt-3">This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation. Bootstrap provides a flexible and easy-to-use tab component that allows developers to create tabbed navigation effortlessly.</p>
      </TabPane>
      <TabPane tabId="2">
        <div className="pt-3 mb-0">
          <div className="flex-space flex-wrap align-items-center">
            <Image className="tab-img" src={`${ImagePath}/avtar/7.jpg`} alt="profile" width={100} height={100}/>
            <ul className="d-flex flex-column gap-1">
              <li><strong>Visit Us:  </strong> 278 Green Avenue Oakland, CA 94612</li>
              <li><strong>Mail Us:</strong> MichaelMMcGowan@teleworm.us</li>
              <li><strong>Contact Number: </strong> 510-767-0025</li>
            </ul>
          </div>
        </div>
      </TabPane>
      <TabPane tabId="3">
        <div>
          <p className="pt-3">Us Technology offers web &amp; mobile development solutions for all industry verticals.Include a short form using fields that'll help your business understand who's contacting them. </p>
          <Label check htmlFor="exampleFormControlone">{EmailAddress}</Label>
          <Input id="exampleFormControlone" type="email" placeholder="youremail@gmail.com" />
        </div>
      </TabPane>
    </TabContent>
  );
};
