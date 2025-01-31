import { Container, Row } from "reactstrap";
import AJAXRequestAlert from "./AJAXRequestAlert";
import AnimatedAlert from "./AnimatedAlert";
import AutoCloseTimer from "./AutoCloseTimer";
import BasicExample from "./BasicExample";
import ComprehensiveRTLSupport from "./ComprehensiveRTLSupport";
import ConfirmationAlert from "./ConfirmationAlert";
import ConfirmationWithApprovals from "./ConfirmationWithApprovals";
import ConfirmationWithTriggers from "./ConfirmationWithTriggers";
import CustomPositionedDialog from "./CustomPositionedDialog";
import DateAlert from "./DateAlert";
import DismissAlert from "./DismissAlert";
import ImageRichMessage from "./ImageRichMessage";
import PasswordGeneratorAlert from "./PasswordGeneratorAlert";
import PositionBottomEnd from "./PositionBottomEnd";
import PositionBottomStart from "./PositionBottomStart";
import PositionTopEnd from "./PositionTopEnd";
import PositionTopStart from "./PositionTopStart";
import RegistrationForm from "./RegistrationForm";
import RichHtmlAlert from "./RichHtmlAlert";
import TitleWithTextUnder from "./TitleWithTextUnder";

const Sweetalert2Container = () => {
  return (
    <Container fluid>
      <Row>
        <PositionTopStart />
        <PositionTopEnd />
        <PositionBottomStart />
        <PositionBottomEnd />
        <BasicExample />
        <TitleWithTextUnder />
        <DismissAlert />
        <RichHtmlAlert />
        <ConfirmationAlert />
        <AnimatedAlert />
        <ConfirmationWithTriggers />
        <ImageRichMessage />
        <AutoCloseTimer />
        <AJAXRequestAlert />
        <ConfirmationWithApprovals />
        <ComprehensiveRTLSupport />
        <PasswordGeneratorAlert />
        <DateAlert />
        <CustomPositionedDialog />
        <RegistrationForm />
      </Row>
    </Container>
  );
};

export default Sweetalert2Container;
