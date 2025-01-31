import { SocialNavData } from "@/Data/UserProfile";
import { SocialAppCallBackType } from "@/Types/UserProfile";
import { Fragment, useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const UserProfileNav: React.FC<SocialAppCallBackType> = ({ callback }) => {
  const [activeTab, setActiveTab] = useState(1);

  const tabHandler = (id: number) => {
    setActiveTab(id);
    callback(id);
  };

  return (
    <Nav tabs className="border-tab tabs-scoial">
      {SocialNavData.map((data, index) => (
        <Fragment key={index}>
          {data.userProfile ? (
            <NavItem className="nav-item">
              <div className="user-designation">
                <div className="title">
                  <a href={`/app/social_app`} className="fs-20" >
                    ElANA
                  </a>
                </div>
                <div className="desc mt-2">general manager</div>
              </div>
            </NavItem>
          ) : (
            <NavItem className="nav-item">
              <NavLink
                className={`nav-link ${activeTab === data.id ? "active" : ""}`}
                onClick={() => tabHandler(data.id)} >
                {data.tittle}
              </NavLink>
            </NavItem>
          )}
        </Fragment>
      ))}
    </Nav>
  );
};

export default UserProfileNav;
