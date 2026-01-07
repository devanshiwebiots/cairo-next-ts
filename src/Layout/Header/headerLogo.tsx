import SVG from "@/CommonComponent/SVG";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setToggleSidebar } from "@/Redux/Reducers/LayoutSlice";
import img1 from "../../../public/assets/images/logo/logo-1.png";
import img2 from "../../../public/assets/images/logo/logo.png";
import Image from "next/image";

export const HeaderLogo = () => {
  const dispatch = useAppDispatch();
  const { sidebarIconType } = useAppSelector((state) => state.themeCustomizer);
  const { toggleSidebar } = useAppSelector((state) => state.layout);

  return (
    <div className="header-logo-wrapper col-auto p-0">
      <div className="logo-wrapper">
        <Image src={img1.src} className="img-fluid for-light" width={100} height={34} alt="image" unoptimized/>
        <Image src={img2.src} className="img-fluid for-dark" width={100} height={34} alt="image" unoptimized/>
      </div>
      <div className="toggle-sidebar" onClick={() => dispatch(setToggleSidebar(!toggleSidebar))} defaultChecked>
        <SVG className={`${sidebarIconType}-icon sidebar-toggle status_toggle middle`} iconId={`${sidebarIconType === "fill" ? "fill-" : ""}stroke-animation`} />
      </div>
    </div>
  );
};
