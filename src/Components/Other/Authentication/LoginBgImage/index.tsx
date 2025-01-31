import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import { Col, Container, Row } from "reactstrap";
import { LoginForm } from "../Common/LoginForm";

const LoginBgImageContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="7">
          <RatioImage className="bg-img-cover bg-center" src={`${ImagePath}/login/2.jpg`} alt="looginpage" />
        </Col>
        <Col xl="5" className="pb-0">
          <div className="login-card login-dark">
            <LoginForm logoClass="text-start" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginBgImageContainer;
