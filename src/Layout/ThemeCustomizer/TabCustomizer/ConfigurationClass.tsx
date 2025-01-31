import ConfigDB from "@/Config/ThemeConfig";
import { Cancel, Configuration, CopyText } from "@/Constant";
import { PropsTypeProp } from "@/Types/ThemeCustomizerTypes";
import React, { Fragment } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import ConfigDBCode from "./ConfigDBCode";

const ConfigurationClass: React.FC<PropsTypeProp> = ({ modal, toggle }) => {
  const handleThemeCopy = () => {
    toast.success("Code Copied to clipboard !", { position: "bottom-right", autoClose: 3000, closeOnClick: true, theme: "light" });
  };
  const configDB = ConfigDB.data;
  return (
    <Fragment>
      <Modal isOpen={modal} toggle={toggle} className="modal-body" centered={true}>
        <ModalHeader toggle={toggle}>{Configuration}</ModalHeader>
        <ModalBody>
          <ConfigDBCode />
        </ModalBody>
        <ModalFooter>
            <CopyToClipboard text={JSON.stringify(configDB)}>
                <Button color="primary" className="notification" onClick={handleThemeCopy}>{CopyText}</Button>
            </CopyToClipboard>
            <Button color="secondary" onClick={toggle}>{Cancel}</Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default ConfigurationClass;
