import { AllTask, Href, TODOLIST, TrashBin } from "@/Constant";
import Link from "next/link";
import React from "react";
import { CheckCircle, FilePlus, Trash } from "react-feather";
import { Button, Nav, NavItem } from "reactstrap";
import WorkingTabs from "./WorkingTabs";

const SideBarNav = () => {
  return (
    <Nav className="main-menu">
      <NavItem>
        <Button color="primary" className="badge-light  btn-mail w-100 text-white shadow-none" block>
          <CheckCircle className="me-2" />
          {TODOLIST}
        </Button>
      </NavItem>
      <NavItem>
        <Link href={Href} className="px-3">
          <span className="iconbg badge-light-primary d-flex justify-content-center align-center" style={{ padding: "8px", borderRadius: "30px" }}>
            <FilePlus />
          </span>
          <span className="title ms-2">All Task</span>
        </Link>
      </NavItem>
      <WorkingTabs />
      <NavItem className="pt-2">
        <Link href={Href} className="px-3">
          <span className="iconbg badge-light-danger d-flex justify-content-center align-center" style={{ padding: "8px", borderRadius: "30px" }}><Trash className="stroke-danger" /></span>
          <span className="title ms-2">{TrashBin}</span>
        </Link>
      </NavItem>
    </Nav>
  );
};

export default SideBarNav;
