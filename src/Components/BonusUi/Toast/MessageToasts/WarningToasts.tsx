import { Fragment, useState } from "react";
import { AlertTriangle } from "react-feather";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";

const WarningToast = () => {
  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <Fragment>
      <Button color="warning" onClick={toggleToast}>
        Warning Toast
      </Button>
      {showToast && (
        <div className="toast-container position-fixed top-50 end-0 p-3 toast-index toast-rtl">
          <Toast id="liveToast5">
            <ToastHeader className="alert-light-warning">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <AlertTriangle className="stroke-warning me-2" />
                  <span>Software drivers need to be updated in advance</span>
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

export default WarningToast;
