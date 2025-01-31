import SVG from "@/CommonComponent/SVG";
import { ImagePath } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { handleResponsiveToggle, setToggleSidebar } from "@/Redux/Reducers/LayoutSlice";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export const LogoWrapper = () => {
  const dispatch = useAppDispatch();
  const { sidebarIconType } = useAppSelector((state) => state.themeCustomizer);
  const { toggleSidebar } = useAppSelector((state) => state.layout);
  return (
    <Fragment>
      <div className="logo-wrapper">
        <Link href={`/dashboard/default_dashboard`}>
          <Image className="img-fluid" src={`${ImagePath}/logo/logo.png`} alt="" width={114} height={38} priority/>
        </Link>
        <div className="back-btn" onClick={() => dispatch(handleResponsiveToggle())}>
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="toggle-sidebar" onClick={() => dispatch(setToggleSidebar(!toggleSidebar))} defaultChecked>
          <SVG className={`${sidebarIconType}-icon sidebar-toggle status_toggle middle`} iconId={`${sidebarIconType === "fill" ? "fill-" : ""}toggle-icon`} />
        </div>
      </div>
      <div className="logo-icon-wrapper">
        <Link href={`/dashboard/default_dashboard`}>
          <Image className="img-fluid" src={`${ImagePath}/logo/logo-icon.png`} alt="" width={32} height={32} />
        </Link>
      </div>
    </Fragment>
  );
};
