import { NavData } from "@/Data/SearchResult";
import { SearchTabsPropsType } from "@/Types/SearchResultType";
import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const SearchTabs: React.FC<SearchTabsPropsType> = ({ callbackActive, activeTabValue }) => {
  const [activeTab, setActiveTab] = useState(activeTabValue);

  const handleTab = (id: number | undefined) => {
    if (id) {
      setActiveTab(id);
      callbackActive(id);
    }
  };
  return (
    <div className="text-center">
      <Nav tabs className="search-list">
        {NavData?.map((data, i) => (
          <NavItem key={i}>
            <NavLink className={` ${activeTab === i + 1 ? "active" : ""}`} onClick={() => handleTab(data.id)}>
              {data.icon}
              {data.tittle}
            </NavLink>
            <div className="material-border"></div>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};

export default SearchTabs;
