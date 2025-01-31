import { Card, CardBody, Col } from "reactstrap";
import { FormValidationTooltip } from "@/Constant";
import { Formik } from "formik";
import { useState } from "react";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { TooltipValidationProp } from "@/Types/FormType";
import { TooltipValidationForm } from "./TooltipValidationForm";
import { TooltipInitialValue, TooltipValidations, TooltipValidationSchema } from "@/Data/Form& Table/Form";

const TooltipFormValidation = () => {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const submitHandler = (values: TooltipValidationProp, { resetForm }: { resetForm: () => void }) => {
    resetForm();
    setSubmitError(false);
  };

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={FormValidationTooltip} span={TooltipValidations} spanClass='mt-1 mb-0'headClass="pb-0"/>
        <CardBody>
          <Formik initialValues={TooltipInitialValue} onSubmit={submitHandler} validationSchema={TooltipValidationSchema}>
            {({ errors }) => <TooltipValidationForm errors={errors} setSubmitError={setSubmitError} submitErrors={submitErrors} />}
          </Formik>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TooltipFormValidation;
