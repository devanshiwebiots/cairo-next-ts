import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { BasicTooltips, MagicPleaseHoverMe } from "@/Constant";
import { BasicTooltipData } from "@/Data/Uikits/Tooltip";
import { useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import InlineTooltipContent from "./InlineTooltipContent";

const BasicTooltip = () => {
  const [basictooltip, setBasictooltip] = useState(false);
  const basictooltipToggle = () => setBasictooltip(!basictooltip);
  return (
    <Col sm="12">
      <Card>
        <CommonUIkitsComponent title={BasicTooltips} span={BasicTooltipData} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <Button color="primary" className="example-popover mb-0 me-0" id="Tooltip-1">
            {MagicPleaseHoverMe}
          </Button>
          <Tooltip target={"Tooltip-1"} placement="top" isOpen={basictooltip} toggle={basictooltipToggle}>
            Surprise!!! Thank you for hovering...
          </Tooltip>
          <InlineTooltipContent />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTooltip;
