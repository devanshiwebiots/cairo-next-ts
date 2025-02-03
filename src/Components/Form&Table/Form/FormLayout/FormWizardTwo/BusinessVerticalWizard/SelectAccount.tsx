import ShowError from "@/Components/Other/common/ShowError";
import { AccountType, Continue } from "@/Constant";
import { SelectAmountData } from "@/Data/Form&Table/Form";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setAccountType } from "@/Redux/Reducers/FormWizardTwoSlice";
import { BusinessFormCommonProps } from "@/Types/FormType";
import React, { ChangeEvent } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const SelectAccount: React.FC<BusinessFormCommonProps> = ({ callbackActive }) => {
  const { accountType } = useAppSelector((state) => state.formWizardTwo);
  const dispatch = useAppDispatch();

  const getUserData = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setAccountType(value));
  };

  const handleNextButton = () => {
    if (accountType !== "") {
      callbackActive(2);
    } else {
      ShowError();
    }
  };
  return (
    <Form onSubmit={(e) => e.preventDefault()} className="g-3 needs-validation">
      <Row>
        <Col xs="12" className="mt-2">
          <h5>{AccountType}</h5>
          <p>It has long been known that distracting information on a page will lose a readers attention.</p>
        </Col>
        <Col xs="12" className="mt-2">
          <FormGroup className="radio radio-primary ps-0 select-account">
            <ul className="radio-wrapper simple-list">
              {SelectAmountData.map((data, i) => (
                <li key={i}>
                  <Input id={data.title} value={data.title} checked={data.title === accountType} type="radio" name="accountType" onChange={getUserData} />
                  <Label className="mb-0" htmlFor={data.title} check>
                    <i className={`fa ${data.iconName}`} />
                    <span className="d-flex flex-column">
                      <span>{data.title}</span>
                      <span>Search your {data.title} information please check it</span>
                    </span>
                  </Label>
                </li>
              ))}
            </ul>
          </FormGroup>
        </Col>
        <Col xs="12" className="text-end mt-3">
          <Button onClick={handleNextButton} color="primary">
            {Continue}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SelectAccount;
