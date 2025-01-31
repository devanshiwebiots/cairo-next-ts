import { Business, Favorites, FollowUp, Holidays, Ideas, Important } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { ContactNavProps } from "@/Types/ContactType";
import React from "react";
import { TabContent, TabPane } from "reactstrap";
import HistoryClass from "./HistoryClass";
import NoDataFoundClass from "./NoDataFoundClass";
import OrganizationTab from "./OrganizationTab";
import PersonalTab from "./PersonalTab";

const TabComponent: React.FunctionComponent<ContactNavProps> = ({ activeTab }): React.ReactElement => {
  const { users } = useAppSelector((state) => state.contact);
  return (
    <div className="email-right-aside bookmark-tabcontent contacts-tabs">
      <div className="email-body radius-left">
        <div className="ps-0">
          <TabContent activeTab={activeTab}>
            <TabPane tabId={"1"}>
              <PersonalTab users={users} />
            </TabPane>
            <TabPane tabId={"2"}>
              <OrganizationTab />
            </TabPane>
            <TabPane tabId="3">
              <NoDataFoundClass title={FollowUp} />
            </TabPane>
            <TabPane tabId="4">
              <NoDataFoundClass title={Favorites} />
            </TabPane>
            <TabPane tabId="5">
              <NoDataFoundClass title={Ideas} />
            </TabPane>
            <TabPane tabId="6">
              <NoDataFoundClass title={Important} />
            </TabPane>
            <TabPane tabId="7">
              <NoDataFoundClass title={Business} />
            </TabPane>
            <TabPane tabId="8">
              <NoDataFoundClass title={Holidays} />
            </TabPane>
            <HistoryClass />
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
