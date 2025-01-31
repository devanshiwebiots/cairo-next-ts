import { TabCustomizerType } from "@/Types/ThemeCustomizerTypes";
import React from "react";
import { TabContent, TabPane } from "reactstrap";
import SidebarCustomizer from "./SidebarCustomizer";
import TabHeader from "./TabHeader";

const TabCustomizer: React.FC<TabCustomizerType> = ({ callbackNav, selected }) => {
  return (
    <TabContent activeTab={selected}>
      <TabHeader callbackNav={callbackNav} />
      <div className="customizer-body custom-scrollbar">
        <TabPane className="sidebar-type">
          <SidebarCustomizer />
        </TabPane>
      </div>
    </TabContent>
  );
};

export default TabCustomizer;
