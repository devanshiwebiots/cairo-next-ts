import { MenuList } from "@/Data/Layout/MenuList";
import { useAppSelector } from "@/Redux/Hooks";
import { MenuItem } from "@/Types/LayoutTypes";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import Menulist from "./Menulist";

const SidebarMenuList = () => {
  const [activeMenu, setActiveMenu] = useState([]);
  const { pinedMenu } = useAppSelector((state) => state.layout);
  const { t } = useTranslation("common");

  const shouldHideMenu = (mainMenu: MenuItem) => {
    return mainMenu?.Items?.every((data) => pinedMenu.includes(data.title || ""));
  };

  return (
    <Fragment>
      {MenuList &&
        MenuList.map((mainMenu: MenuItem, index) => (
          <Fragment key={index}>
            <li className={`sidebar-main-title ${shouldHideMenu(mainMenu) ? "d-none" : ""}`}>
              <div>
                <h6 className="">{t(mainMenu.title)}</h6>
              </div>
            </li>
            <Menulist menu={mainMenu.Items} activeMenu={activeMenu} setActiveMenu={setActiveMenu} level={0} />
          </Fragment>
        ))}
    </Fragment>
  );
};

export default SidebarMenuList;
