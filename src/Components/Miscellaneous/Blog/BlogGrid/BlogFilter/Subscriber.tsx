import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Subscribers } from "@/Constant";
import { Button, Card, CardBody, Col } from "reactstrap";

const Subscriber = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={Subscribers} headClass="pb-0" />
        <CardBody>
          <p className="mb-2">To get more detail for new types of blogs.</p>
          <input className="form-control" type="email" placeholder="Enter your email" />
          <Button color="primary" className=" w-100 mt-3">
            Get Started
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Subscriber;
