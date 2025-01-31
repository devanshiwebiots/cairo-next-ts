import { Href, ImagePath, QuickOption } from "@/Constant";
import { NavCustomizerType } from "@/Types/ThemeCustomizerTypes";
import React from "react";
import { Nav, NavLink } from "reactstrap";
import NavLinks from "./NavLinks";
import Image from "next/image";

const NavCustomizer: React.FC<NavCustomizerType> = ({ callbackNav, selected }) => {
  return (
    <Nav className="flex-column nac-pills">
      <NavLink className={`${selected === "sidebar-type" ? "active" : ""}`} onClick={() => callbackNav("sidebar-type", true)} href={Href}>
        <div className="settings">
          <Image src={`${ImagePath}/customizer/1.png`} alt="" width={20} height={20} />
        </div>
        <span>{QuickOption}</span>
      </NavLink>
      <NavLinks />
    </Nav>
  );
};

export default NavCustomizer;
