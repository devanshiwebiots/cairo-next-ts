// import { Dropzone, ExtFile, FileMosaic } from "@dropzone-ui/react";
import { useState } from "react";
import { Form } from "reactstrap";

const DropzoneClass = () => {
   return (
    <Form className="m-b-20">
      {/* <Dropzone onChange={updateFiles} value={files} maxFiles={1} header={false} footer={false} label="Drag'n drop files here or click to Browse">
        {files.map((file: ExtFile) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info={true} />
        ))}
        {files.length === 0 && (
          <div className="dz-message needsclick">
            <i className="icon-cloud-up fs-1 txt-primary"></i>
            <h6 className="f-w-700 mb-1">Drop files here or click to upload.</h6>
          </div>
        )}
      </Dropzone> */}
    </Form>
  );
};

export default DropzoneClass;
