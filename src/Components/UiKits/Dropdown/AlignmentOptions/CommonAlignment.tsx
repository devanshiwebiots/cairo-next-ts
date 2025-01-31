import { Href } from "@/Constant";
import { CommonAlignmentProp } from "@/Types/UikitsType";
import React, { Fragment, useState } from "react";
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const CommonAlignment: React.FC<CommonAlignmentProp> = ({ value }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Fragment>
      <ButtonGroup>
        <Dropdown isOpen={open} toggle={toggle} direction={value.directions}>
          <DropdownToggle caret color={value.btnColor} className="text-white">
            {value.btnText}
          </DropdownToggle>
          <DropdownMenu className="dropdown-block">
            {value.items.map((data, index) => (
              <DropdownItem href={Href} key={index}>{data.item}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </ButtonGroup>
    </Fragment>
  );
};

export default CommonAlignment;
