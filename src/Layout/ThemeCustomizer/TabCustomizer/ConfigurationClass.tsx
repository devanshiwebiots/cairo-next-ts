import ConfigDB from "@/Config/ThemeConfig";
import { Cancel, Configuration, CopyText } from "@/Constant";
import { PropsTypeProp } from "@/Types/ThemeCustomizerTypes";
import React, { Fragment } from "react";
import { toast } from "react-toastify";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import ConfigDBCode from "./ConfigDBCode";

const ConfigurationClass: React.FC<PropsTypeProp> = ({ modal, toggle }) => {
  const handleThemeCopy = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(configDB));
      toast.success("Code copied to clipboard!", {
        position: "bottom-right",
        autoClose: 3000,
        closeOnClick: true,
        theme: "light",
      });
    } catch (err) {
      toast.error("Failed to copy text to clipboard.", {
        position: "bottom-right",
        autoClose: 3000,
        closeOnClick: true,
        theme: "light",
      });
    }
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
          <Button color="primary" className="notification" onClick={handleThemeCopy}>{CopyText}</Button>
          <Button color="secondary" onClick={toggle}>
            {Cancel}
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default ConfigurationClass;
