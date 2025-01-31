import { Fragment, useState } from "react";
import { CheckSquare } from "react-feather";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";

const SuccessToast = () => {
  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <Fragment>
      <Button color="success" onClick={toggleToast}>
        Success Toast
      </Button>
      {showToast && (
        <div className="toast-container position-fixed top-0 end-0 p-3 toast-index toast-rtl">
          <Toast id="liveToast6" role="alert" aria-live="polite" aria-atomic="true">
            <ToastHeader className="alert-light-success">
              <div className="d-flex justify-content-between align-items-center">
                <ToastBody>
                  <CheckSquare style={{ color: "#61AE41" }} />
                  Success: We've updated your info
                </ToastBody>
                <Button close onClick={() => setShowToast(false)}/>
              </div>
            </ToastHeader>
            <ToastBody />
          </Toast>
        </div>
      )}
    </Fragment>
  );
};

export default SuccessToast;
