import ShowError from "@/Components/Other/common/ShowError";
import { Continue, DescribeYourIssue, Previous } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setInquiresForm } from "@/Redux/Reducers/FormWizardTwoSlice";
import { BusinessFormCommonProps } from "@/Types/FormType";
import React, { ChangeEvent } from "react";
import { Button, Col, Form, Input, Label, Row } from "reactstrap";
import { InquiryDetails } from "./InquiryDetails";

const InquiresForm: React.FC<BusinessFormCommonProps> = ({ differentId, callbackActive }) => {
  const { inquiresForm } = useAppSelector((state) => state.formWizardTwo);
  const { notifications, email, contactNumber, describeIssue } = inquiresForm;
  const dispatch = useAppDispatch();

  const getUserData = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = name === "rememberNextTime" ? e.target.checked : e.target.value;
    dispatch(setInquiresForm({ ...inquiresForm, [name]: value }));
  };

  const handleNextButton = () => {
    if (notifications !== "" && email !== "" && contactNumber !== "" && describeIssue !== "") {
      callbackActive(4);
    } else {
      ShowError();
    }
  };
  return (
    <Form onSubmit={(e) => e.preventDefault()} className="g-3 needs-validation" noValidate>
      <Row>
        <InquiryDetails getUserData={getUserData} differentId={differentId} />
        <Col xs="12" className="mt-2">
          <Label className="f-w-500" check>
            {DescribeYourIssue}
          </Label>
          <Input type="textarea" rows={3} value={describeIssue} name="describeIssue" onChange={getUserData} />
        </Col>
        <Col xs="12" className="text-end mt-3">
          <Button color="primary">{Previous}</Button>
          <Button className="ms-1" color="primary" onClick={handleNextButton}>
            {Continue}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default InquiresForm;
