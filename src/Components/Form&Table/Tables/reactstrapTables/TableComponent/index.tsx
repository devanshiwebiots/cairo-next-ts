import { AlertTitle, BadgesTable, CheckboxTitle, InputTitle, ProgressbarTitle, RadioButtonsTitle, SelectTitle, SwitchTable, TooltipTriggersTitle, UIComponentsTitle } from "@/Constant";
import { AlertTableData, BadgeTableData, CheckBoxTableData, InputTableData, ProgressTableData, RadioBoxTableData, SelectBoxTableData, SwitchTableData, TooltipTableData, UiComponentData } from "@/Data/Form&Table/Table/TableComponent ";
import { Container, Row } from "reactstrap";
import CommonTableComponent from "./Common/CommonTableComponent";

const TableComponentContainer = () => {
  return (
    <Container fluid>
      <Row>
        <CommonTableComponent title={UIComponentsTitle} data={UiComponentData} />
        <CommonTableComponent title={AlertTitle} data={AlertTableData} />
        <CommonTableComponent title={ProgressbarTitle} data={ProgressTableData} tableClass="checkbox-td-width" />
        <CommonTableComponent title={CheckboxTitle} data={CheckBoxTableData} tableClass='checkbox-td-width"' />
        <CommonTableComponent title={RadioButtonsTitle} data={RadioBoxTableData} tableClass="radio-first-col-width" />
        <CommonTableComponent title={SelectTitle} data={SelectBoxTableData} tableClass="checkbox-td-width" />
        <CommonTableComponent title={InputTitle} data={InputTableData} tableClass="checkbox-td-width" />
        <CommonTableComponent title={BadgesTable} data={BadgeTableData} />
        <CommonTableComponent title={TooltipTriggersTitle} data={TooltipTableData} />
        <CommonTableComponent title={SwitchTable} data={SwitchTableData} />
      </Row>
    </Container>
  );
};

export default TableComponentContainer;
