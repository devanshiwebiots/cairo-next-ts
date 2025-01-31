import { Projectcreated } from "@/Constant";
import { ProjectCreatedChart } from "@/Data/Widgets/General";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import DashboardCommonHeader from "../../Dashboard/common/DashboardCommonHeader";

const ProjectCreatedWidget = () => {
  return (
    <Col md="6">
      <Card>
        <DashboardCommonHeader title={Projectcreated} dropDownFalse={true} />
        <CardBody className="p-0">
          <ReactApexChart type="area" options={ProjectCreatedChart} series={ProjectCreatedChart.series} height={320} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectCreatedWidget;
