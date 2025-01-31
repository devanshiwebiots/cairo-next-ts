import { ModalOneDatas } from "@/Data/Form& Table/Form";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { getValue } from "@/Redux/Reducers/TwoFactorSlice";
import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const ModalOneData = () => {
  const { selectAuthenticatorMethodName } = useAppSelector((state) => state.twoFactor);
  const dispatch = useAppDispatch();
  return (
    <div className="authentication-options">
      <FormGroup className="radio radio-primary ps-0" check>
        <ul className="radio-wrapper">
          {ModalOneDatas.map((data, i) => (
            <li key={i}>
              <Input onChange={(e) => dispatch(getValue(e.target.value))} id={data.title} type="radio" name="selectAuthenticatorMethodName" checked={selectAuthenticatorMethodName === data.title} value={data.title} />
              <Label check className="mb-0" htmlFor={data.title}>
                <i className={`fa ${data.iconClassName}`} />
                <span className="d-flex flex-column">
                  <span>{data.title}</span>
                  <span>{data.description}</span>
                </span>
              </Label>
            </li>
          ))}
        </ul>
      </FormGroup>
    </div>
  );
};

export default ModalOneData;
