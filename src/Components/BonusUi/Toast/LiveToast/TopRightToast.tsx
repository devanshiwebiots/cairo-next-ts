import { ImagePath, TopRightToasts } from "@/Constant";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Button, Toast, ToastBody } from "reactstrap";

const TopRightToast = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  return (
    <Fragment>
      <Button color="primary" onClick={toggle}>
        {TopRightToasts}
      </Button>
      <div className="toast-container position-fixed top-0 end-0 p-3 toast-index toast-rtl">
        <Toast fade isOpen={open}>
          <div className="toast-header toast-img">
            <Image className="rounded me-2" src={`${ImagePath}/product-lists/profile.png`} alt="profile" width={30} height={30} unoptimized/>
            <strong className="me-auto">Cairo theme</strong>
            <small>5 min ago</small>
            <Button close onClick={() => setOpen(false)}/>
          </div>
          <ToastBody className="toast-dark">{"Hello, I'm a web-designer."}</ToastBody>
        </Toast>
      </div>
    </Fragment>
  );
};

export default TopRightToast;
