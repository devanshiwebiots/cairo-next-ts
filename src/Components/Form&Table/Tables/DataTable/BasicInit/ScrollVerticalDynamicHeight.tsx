import { ScrollVerticalDynamicHeightTitle, SearchTableButton } from "@/Constant";
import { ScrollVertical1, ScrollVertical2, ScrollVerticalColumns, ScrollVerticalData } from "@/Data/Form&Table/Table/DataTable/ScrollVerticalDynamicHeight";
import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, CardHeader, Col, Input, Label } from "reactstrap";

const ScrollVerticalDynamicHeight = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = ScrollVerticalData.filter((item) => item.title && item.name.toLowerCase().includes(filterText.toLowerCase()));
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="basic-12_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm="12">
      <Card className="basic-data-table">
        <CardHeader className="pb-0 card-no-border">
          <h4>{ScrollVerticalDynamicHeightTitle}</h4>
          <span>{ScrollVertical1}</span>
          <span>{ScrollVertical2}</span>
        </CardHeader>
        <CardBody>
          <div className="table-responsive user-datatable custom-scrollbar">
            <DataTable data={filteredItems} columns={ScrollVerticalColumns} striped fixedHeader fixedHeaderScrollHeight="40vh" className="display dataTable" subHeader subHeaderComponent={subHeaderComponentMemo} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollVerticalDynamicHeight;
