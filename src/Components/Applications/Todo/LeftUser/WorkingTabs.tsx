import { Completed, Href, InProcess, Pending } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import React, { Fragment } from "react";
import { Activity, Cast, CheckCircle } from "react-feather";
import { Badge, NavItem } from "reactstrap";

const WorkingTabs = () => {
  const { todoList } = useAppSelector((state) => state.todo);
  return (
    <Fragment>
      <NavItem className="pt-2">
        <Link href={Href} className="px-3">
          <span className="iconbg badge-light-success d-flex justify-content-center align-center" style={{ padding: "8px", borderRadius: "30px" }}>
            <CheckCircle className="stroke-success" />
          </span>
          <span className="title ms-2">{Completed}</span>
          <Badge pill color="success" className="text-white">
            {todoList.filter((data) => data.badge === "Done").length}
          </Badge>
        </Link>
      </NavItem>

      <NavItem className="pt-2">
        <Link href={Href} className="px-3">
          <span className="iconbg badge-light-danger d-flex justify-content-center align-center" style={{ padding: "8px", borderRadius: "30px" }}><Cast className="stroke-danger" /></span>
        <span className="title ms-2">{Pending}</span>
          <Badge pill color="danger" className="text-white">
            {todoList.filter((data) => data.badge === "Pending").length}
          </Badge>
        </Link>
      </NavItem>
        <NavItem className="pt-2">
      <Link href={Href} className="px-3">
          <span className="iconbg badge-light-info d-flex justify-content-center align-center" style={{ padding: "8px", borderRadius: "30px" }}><Activity className="stroke-info" /></span>
          <span className="title ms-2">{InProcess}</span>
          <Badge pill color="primary" className="text-white">
            {todoList.filter((data) => data.badge === "In Progress").length}
          </Badge>
        </Link>
      </NavItem>
    </Fragment>
  );
};

export default WorkingTabs;
