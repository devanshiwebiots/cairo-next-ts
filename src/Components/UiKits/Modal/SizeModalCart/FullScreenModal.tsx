import { ExtraLargeModals, FullScreenModals, WebDesigns } from "@/Constant";
import { FullScreenData } from "@/Data/Uikits/Modal";
import React, { Fragment, useState } from "react";
import { ChevronsRight } from "react-feather";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";

const FullScreenModal = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const fullScreenToggle = () => setFullScreen(!fullScreen);
  return (
    <Fragment>
      <Button color="secondary" onClick={fullScreenToggle}>
        {FullScreenModals}
      </Button>
      <Modal fullscreen isOpen={fullScreen} toggle={fullScreenToggle}>
        <ModalHeader toggle={fullScreenToggle}>
          <span className="fs-5">{ExtraLargeModals}</span>
        </ModalHeader>
        <ModalBody className="dark-modal">
          <div className="large-modal-header">
            <ChevronsRight />
            <h5 className="f-w-600">{WebDesigns} </h5>
          </div>
          <p className="modal-padding-space">We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</p>
          {FullScreenData.map(({ title, text }, index) => (
            <Fragment key={index}>
              <div className="large-modal-header">
                <ChevronsRight />
                <h5>{title}</h5>
              </div>
              <p className="modal-padding-space">{text}</p>
            </Fragment>
          ))}
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default FullScreenModal;
