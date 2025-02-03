import { SearchTableButton } from "@/Constant";
import { ServerColumn, ServerData } from "@/Data/Form&Table/Table/DataTable/ServerSideData";
import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Input, Label } from "reactstrap";
import ServerSideProcessingHeader from "./ServerSideProcessingHeader";

const ServerSideProcessing = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = ServerData.filter((item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="data-source-4_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-1">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);
  return (
    <Col sm="12">
      <Card className="basic-data-table">
        <ServerSideProcessingHeader />
        <CardBody className="table-responsive">
          <DataTable className="theme-scrollbar" data={filteredItems} columns={ServerColumn} striped highlightOnHover pagination subHeader subHeaderComponent={subHeaderComponentMemo} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ServerSideProcessing;
