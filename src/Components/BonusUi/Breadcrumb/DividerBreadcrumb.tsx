import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BreadcrumbHome, BreadcrumbProgress, BreadcrumbUiKits, DividerBreadcrumbs, Href } from "@/Constant";
import { DividerBreadcrumbData } from "@/Data/BonusUi/Breadcrumb";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";

const DividerBreadcrumb = () => {
  return (
    <Col md="6">
      <Card className="height-equal" style={{minHeight:'161.406px'}}>
        <CommonCardHeader title={DividerBreadcrumbs} span={DividerBreadcrumbData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Breadcrumb className="breadcrumb-icon">
            <BreadcrumbItem>
              <a href={Href}>{BreadcrumbHome}</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbUiKits}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="m-0 breadcrumb-icon">
            <BreadcrumbItem>
              <a href={Href}>{BreadcrumbHome}</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href={Href}>{BreadcrumbUiKits}</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbProgress}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DividerBreadcrumb;
