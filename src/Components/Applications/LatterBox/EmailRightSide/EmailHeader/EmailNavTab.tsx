import SVG from "@/CommonComponent/SVG";
import { Href } from "@/Constant";
import { EmailNavTabs } from "@/Data/LetterBox";
import { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const EmailNavTab = () => {
  const [navId, setNavId] = useState("pills-important-tab");

  return (
    <Nav className="email-tabs" role={"tablist"}>
      {EmailNavTabs.map((data, i) => (
        <NavItem key={i}>
          <NavLink className={navId === data.id ? "active" : ""} id={data.id} href={Href} onClick={() => setNavId(data.id)}>
            <SVG iconId={data.icon} />
            <span>{data.title}</span>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default EmailNavTab;
