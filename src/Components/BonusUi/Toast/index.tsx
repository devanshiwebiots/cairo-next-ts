import { Container, Row } from "reactstrap";
import ColorsSchemes from "./ColorsSchemes";
import DefaultToast from "./DefaultToast";
import LiveToast from "./LiveToast";
import MessageToasts from "./MessageToasts";
import StackingToasts from "./StackingToasts";
import ToastPlacement from "./ToastPlacement";
import TranslucentToasts from "./TranslucentToasts";
import UniqueToast from "./UniqueToast";

const ToastContainer = () => {
  return (
    <Container fluid>
      <Row>
        <MessageToasts />
        <LiveToast />
        <ColorsSchemes />
        <StackingToasts />
        <TranslucentToasts />
        <DefaultToast />
        <UniqueToast />
        <ToastPlacement />
      </Row>
    </Container>
  );
};

export default ToastContainer;
