import { Col, Form, FormGroup, Input } from "reactstrap";
import {  SearchCairo, } from "@/Constant";
import { useState } from "react";
import { useAppDispatch } from "@/Redux/Hooks";
import { filterSearchBy } from "@/Redux/Reducers/FilterSlice";

export const SearchBox = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const dispatch = useAppDispatch();
  
  const handleSearchKeyword = (keyword: string) => {
    setSearchKeyword(keyword);
    dispatch(filterSearchBy(searchKeyword));
  };

  return (
    <Col md="9" sm="12">
      <Form>
        <FormGroup className="form-group m-0">
          <Input className="form-control" type="search" placeholder={SearchCairo} onChange={(e) => handleSearchKeyword(e.target.value)}/>
          <i className="fa fa-search"></i>
        </FormGroup>
      </Form>
    </Col>
  );
};
