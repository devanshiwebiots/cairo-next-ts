import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AddonPlaceHolder, ButtonAddon, SubmitButtonAddon, SubmitButtonAddonPlaceHolder } from "@/Constant";
import { ButtonAddonData } from "@/Data/Form&Table/Form";
import React from "react";
import { Button, Card, CardBody, Col, Input, InputGroup } from "reactstrap";

const ButtonAddons = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={ButtonAddon} span={ButtonAddonData} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody className="card-wrapper input-group-wrapper">
          <InputGroup>
            <Button color="secondary" outline id="button-addon1">
              {"$ 25"}
            </Button>
            <Input type="text" id="button-addon1" />
          </InputGroup>
          <InputGroup>
            <Input type="text" placeholder={SubmitButtonAddonPlaceHolder} id="button-addon2" />
            <Button color="warning" outline id="button-addon2">
              {SubmitButtonAddon}
            </Button>
          </InputGroup>
          <InputGroup>
            <Button color="secondary">
              <span>&#8364; </span>
            </Button>
            <Button color="warning">{"0.0114419"}</Button>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <Input type="text" placeholder={AddonPlaceHolder} />
            <Button color="secondary">
              <span>&#8377; </span>
            </Button>
            <Button color="warning">{"500"}</Button>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ButtonAddons;
