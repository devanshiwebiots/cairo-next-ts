"use client";
import Footer from "@/Layout/Footer";
import { Header } from "@/Layout/Header";
import { BreadCrumbs } from "@/Layout/Header/BreadCrumbs";
import { SideBar } from "@/Layout/SideBar";
import TapTop from "@/Layout/TapTop";
import ThemeCustomizer from "@/Layout/ThemeCustomizer";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setToggleSidebar } from "@/Redux/Reducers/LayoutSlice";
import { setLayout } from "@/Redux/Reducers/ThemeCustomizerSlice";
import { RootLayoutProps } from "@/Types/LayoutTypes";
import { Fragment, useEffect } from "react";
import { ToastContainer } from "react-toastify";

const RootLayout = ({ children }: RootLayoutProps) => {
  const { layout } = useAppSelector((state) => state.themeCustomizer);
  const dispatch = useAppDispatch();

  const compactSidebar = () => {
    const windowWidth = window.innerWidth;
    if (layout === "compact-wrapper") {
      if (windowWidth < 1200) {
        dispatch(setToggleSidebar(true));
      } else {
        dispatch(setToggleSidebar(false));
      }
    } else if (layout === "horizontal-wrapper") {
      if (windowWidth < 992) {
        dispatch(setToggleSidebar(true));
        dispatch(setLayout("compact-wrapper"));
      } else {
        dispatch(setToggleSidebar(false));
        dispatch(setLayout(localStorage.getItem("layout")));
      }
    }
  };

  useEffect(() => {
    compactSidebar();
    window.addEventListener("resize", () => {
      compactSidebar();
    });
  }, [layout]);
  
  return (
    <Fragment>
      <div className={`page-wrapper ${layout}`} id="pageWrapper">
        <Header />
        <div className="page-body-wrapper">
          <SideBar />
          <div className="page-body">
            <BreadCrumbs />
            {children}
          </div>
          <Footer />
        </div>
      </div>
      <ThemeCustomizer />
      <ToastContainer />
      <TapTop />
    </Fragment>
  );
};

export default RootLayout;
