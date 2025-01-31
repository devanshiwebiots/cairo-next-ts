import { Col } from "reactstrap";
import { BookMark } from "./BookMark";
import { CartData } from "./CartData";
import { DarkMode } from "./DarkMode";
import Languages from "./Languages";
import { MessageHeader } from "./Message";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import { SearchNav } from "./SearchNav";

export const HeaderRight = () => {
  return (
    <Col className="nav-right col-xl-7 col-md-8 col-auto box-col-6 pull-right right-header ps-5 ms-auto col">
      <ul className="nav-menus">
        <SearchNav />
        <Languages />
        <BookMark />
        <DarkMode />
        <CartData />
        <Notification />
        <MessageHeader />
        <Profile />
      </ul>
    </Col>
  );
};
