import { Class, CopyText, Markup } from "@/Constant";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { Button, Container, Input, Row } from "reactstrap";
import React, { useEffect, useState } from "react";
import { IconMarkUpProps } from "@/Types/IconType";

const IconMarkUp: React.FC<IconMarkUpProps> = ({ icons, itag }) => {
  const featherIcons = require("feather-icons");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (itag.iTag !== "" && icons.icon !== "") {
      setOpen(true);
    }
  }, [itag.iTag, icons.icon]);

  return (
    <div className={`icon-hover-bottom p-fixed fa-fa-icon-show-div ${open ? "d-block" : "d-none"}`}>
      <Container fluid>
        <Row>
          <div className="icon-popup">
            <div className="close-icon" onClick={() => setOpen(false)}>
              <i className="icofont icofont-close"></i>
            </div>
            <div className="icon-first">
              {icons.feathericon ? (
                <div dangerouslySetInnerHTML={{ __html: featherIcons.icons[icons.feathericon].toSvg(icons.feathericon) }} />
              ) : (
                <i id="icon_main" className={icons.icon}></i>
              )}
            </div>
            <div className="icon-class">
              <label className="icon-title mb-2">{Class}</label>
              <span id="fclass1" className="">
                {icons.feathericon
                  ? itag.iTag.slice(17, itag.iTag.indexOf('"></i>'))
                  : itag.iTag && itag.iTag.slice(14, itag.iTag.indexOf('"></i>'))}
              </span>
            </div>
            <div className="icon-last icon-last">
              <label className="icon-title">{Markup}</label>
              <div className="form-inline">
                <div className="form-group m-0">
                  <Input className="inp-val m-r-10" id="input_copy" type="text" defaultValue={itag.iTag} />
                  <CopyToClipboard text={itag.iTag}>
                    <Button
                      color="primary"
                      className="notification"
                      onClick={() =>
                        toast.info("Code Copied to clipboard!", {
                          position: "bottom-right",
                          theme: "colored",
                        })
                      }
                    >
                      {CopyText}
                    </Button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default IconMarkUp;
