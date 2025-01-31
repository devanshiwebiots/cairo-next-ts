import { ImagePath } from "@/Constant";
import { PlacementToastContentProp } from "@/Types/BonusUiType";
import Image from "next/image";
import { Toast, ToastBody } from "reactstrap";

export const PlacementToastContent: React.FC<PlacementToastContentProp> = ({ data }) => {
  return (
    <div className="bg-light position-relative bd-example-toasts">
      <div className={`toast-container p-3 position-absolute ${data}`}>
        <Toast fade>
          <div className="toast-header toast-img">
            <Image className="rounded me-2" src={`${ImagePath}/product-lists/profile.png`} alt="profile" width={30} height={30} />
            <strong className="me-auto">Cairo theme</strong>
            <small className="d-sm-block d-none">25 min ago</small>
          </div>
          <ToastBody className="toast-dark txt-dark">
            <p className="toast-content">
              <em className="txt-danger">Attackers</em> on malicious activity may trick you into doing something dangrous like installing software or revealing your personal informations.
            </p>
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};
