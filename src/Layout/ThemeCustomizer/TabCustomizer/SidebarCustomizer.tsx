import { Fragment } from "react";
import ColorComponent from "./ColorComponent";
import LayoutType from "./LayoutType";
import MixLayoutComponent from "./MixLayoutComponent";
import SidebarIconType from "./SidebarIconType";
import SidebarType from "./SidebarType";

const SidebarCustomizer = () => {
  return (
    <Fragment>
      <LayoutType />
      <SidebarType />
      <SidebarIconType />
      <ColorComponent />
      <MixLayoutComponent />
    </Fragment>
  );
};

export default SidebarCustomizer;
