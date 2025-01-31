import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AddProjectAndUpload } from "@/Constant";
import React from "react";
import { Card, Col, Table } from "reactstrap";
import AddProjectsAndUploadTableBody from "./AddProjectsAndUploadTableBody";

const AddProjectsAndUpload = () => {
  return (
    <Col md="12">
      <Card>
        <CommonCardHeader title={AddProjectAndUpload}  />
        <div className="table-responsive theme-scrollbar custom-scrollbar add-project">
          <Table className="card-table table-vcenter text-nowrap">
            <thead className="bg-light-primary">
              <tr>
                <th>ProjectName</th>
                <th>Date</th>
                <th>Status</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <AddProjectsAndUploadTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default AddProjectsAndUpload;
