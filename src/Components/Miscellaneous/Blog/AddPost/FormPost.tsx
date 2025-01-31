import { PostCategory, PostTitle, PostTitlePlaceholder, PostTypePlaceholder } from "@/Constant";
import { options, PostTypeData } from "@/Data/Blog"; 
import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import SimpleMdeReact from "react-simplemde-editor";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import RadioTypeForm from "./RadioTypeForm";

const FormPost: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <Form className="needs-validation">
      <Row>
        <Col sm="12">
          <FormGroup>
            <Label check>{PostTitle}:</Label>
            <Input type="text" placeholder={PostTitlePlaceholder} />
          </FormGroup>
          <RadioTypeForm />
          <FormGroup>
            <div className="col-form-Label">
              {PostCategory}:
              <Typeahead id="multiple-typeahead" className="mt-2" labelKey="name" multiple options={PostTypeData} placeholder={PostTypePlaceholder} />
            </div>
          </FormGroup>
          <div className="email-wrapper">
            <div className="theme-form">
              <div className="mb-3">
                <Label>Content:</Label>
                <SimpleMdeReact value={value} onChange={handleChange} options={options} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default FormPost;
