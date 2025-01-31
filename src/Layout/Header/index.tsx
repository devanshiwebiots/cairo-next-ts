import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { headerResponsive } from "@/Redux/Reducers/LayoutSlice";
import { Fragment, useEffect } from "react";
import { Col, Row } from "reactstrap";
import { HeaderLogo } from "./headerLogo";
import { HeaderRight } from "./HeaderRight";
import { Searchbar } from "./HeaderSearch";

export const Header = () => {
  const { toggleSidebar } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(headerResponsive());
  }, [dispatch]);

  return (
    <Fragment>
      <Row className={`page-header ${toggleSidebar ? "close_icon" : ""}`} id="page-header">
        <Col className="header-wrapper m-0 row">
          <HeaderLogo />
          <Searchbar />
          <HeaderRight />
        </Col>
      </Row>
    </Fragment>
  );
};
