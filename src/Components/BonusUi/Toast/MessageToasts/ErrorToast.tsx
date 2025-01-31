import { Fragment, useState } from "react";
import { XCircle } from "react-feather";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";

const ErrorToast = () => {
  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <Fragment>
      <Button color="danger" onClick={toggleToast}>
        Error Toast
      </Button>
      {showToast && (
        <div className="toast-container position-fixed bottom-0 end-0 p-3 toast-index toast-rtl">
          <Toast id="liveToast4" role="alert" aria-live="polite" aria-atomic="true">
            <ToastHeader className="alert-light-danger">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <XCircle className="stroke-danger me-2" />
                  <span>A database connection error has occurred</span>
                </div>
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

export default ErrorToast;
