import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { useState } from "react";
import SVG from "@/CommonComponent/SVG";
import { DropClassTypes } from "@/Types/ChatType";

const ContactEdit: React.FC<DropClassTypes> = ({ dropClass }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className={`contact-edit ${dropClass}`}>
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle tag="div" role="button" aria-expanded={dropdownOpen}>
        <SVG iconId="menubar"/>
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem href="#!">View details</DropdownItem>
        <DropdownItem href="#!">Send messages</DropdownItem>
        <DropdownItem href="#!">Add to favorites</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
  );
};

export default ContactEdit;