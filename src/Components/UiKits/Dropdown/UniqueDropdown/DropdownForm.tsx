import { DropdownForms, EmailAddress, Password, RememberMe, Signin } from "@/Constant";
import React, { useState } from "react";
import { Button, ButtonGroup, Dropdown, DropdownMenu, DropdownToggle, Form, FormGroup, Input, Label } from "reactstrap";

export const DropdownForm = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <ButtonGroup>
      <Dropdown isOpen={open} toggle={toggle}>
        <DropdownToggle caret color="primary" className="text-white">{DropdownForms}</DropdownToggle>
        <DropdownMenu className="p-4 form-wrapper dark-form">
          <Form>
            <FormGroup>
              <Label check>{EmailAddress}</Label>
              <Input type="email" placeholder="email@example.com" required />
            </FormGroup>
            <FormGroup>
              <Label check>{Password}</Label>
              <Input type="password" placeholder="Password" autoComplete="off"/>
            </FormGroup>
            <FormGroup>
              <FormGroup check>
                <Input type="checkbox" />
                <Label check>{RememberMe}</Label>
              </FormGroup>
            </FormGroup>
            <Button color="dark">{Signin}</Button>
          </Form>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
};
