import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AutoPlayVariants } from "@/Constant";
import { AutoPlayDataList, AutoPlayVariantList } from "@/Data/ReactstrapCarousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";

const AutoPlayVariant = () => {
  return (
    <Col xl="6" className="col-12">
      <Card>
        <CommonCardHeader title={AutoPlayVariants} span={AutoPlayVariantList} spanClass="mt-1 mb-0" headClass="pb-0" />
        <CardBody>
          <CommonCarousel data={AutoPlayDataList} indecators interval="1500" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default AutoPlayVariant;
