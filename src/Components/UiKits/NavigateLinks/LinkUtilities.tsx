import CommonUIkitsComponent from "@/CommonComponent/CommonUIkitsComponent";
import { Href, Linkutilities } from "@/Constant";
import { LinkUtilitiesData, LinkUtilitiesSpan } from "@/Data/Uikits/NavigateLinks";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";

const LinkUtilities = () => {
  return (
    <Col xxl="3" sm="6">
      <Card className="height-equal" style={{ minHeight: "485.391px" }}>
        <CommonUIkitsComponent title={Linkutilities} span={LinkUtilitiesSpan} headClass="pb-0" spanClass="mt-1 mb-0" />
        <CardBody>
          {LinkUtilitiesData.map(({ color }, index) => (
            <p key={index}>
              <Link href={Href} className={`link-${color} link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover`}>
                Link {color}
              </Link>
            </p>
          ))}
          <p>
            <Link className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" href={Href}>
              Link emphasis
            </Link>
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LinkUtilities;
