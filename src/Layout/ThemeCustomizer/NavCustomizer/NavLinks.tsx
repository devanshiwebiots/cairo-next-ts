import { ImagePath } from "@/Constant";
import { NavLinksList } from "@/Data/Layout";
import Image from "next/image";
import React, { Fragment } from "react";
import { NavLink } from "reactstrap";

const NavLinks = () => {
  return (
    <Fragment>
      {NavLinksList &&
        NavLinksList.map((data, index) => (
          <NavLink key={index} href={data.path} target="_blank">
            <div>
              <Image src={`${ImagePath}/customizer/${data.image}`} width={20} height={20} alt=""/>
            </div>
            <span>{data.name}</span>
          </NavLink>
        ))}
    </Fragment>
  );
};

export default NavLinks;
