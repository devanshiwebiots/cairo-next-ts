import ConfigDB from "@/Config/ThemeConfig";
import { Sidebar_Icon } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { addSidebarIconType } from "@/Redux/Reducers/ThemeCustomizerSlice";
import FillIcon from "./FillIcon";
import StrokeIcon from "./StrokeIcon";

const SidebarIconType = () => {
  const dispatch = useAppDispatch();
  const SidebarIconType = ConfigDB.data.settings.sidebar.iconType;
  const handleSideBarIconType = (type: string) => {
    dispatch(addSidebarIconType(type));
  };
  return (
    <div>
      <h6>{Sidebar_Icon}</h6>
      <ul className={`sidebar-type layout-grid`}>
        <StrokeIcon handleSideBarIconType={handleSideBarIconType} sideBarIconType={SidebarIconType} />
        <FillIcon handleSideBarIconType={handleSideBarIconType} sideBarIconType={SidebarIconType} />
      </ul>
    </div>
  );
};

export default SidebarIconType;
