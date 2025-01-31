import { DropFilesHereOrClickToUpload } from "@/Constant";

const CommonFileBody = () => {
  return (
    <div className="dz-message needsclick">
      <i className="icon-cloud-up fs-1 txt-primary"></i>
      <h5>{DropFilesHereOrClickToUpload}</h5>
      <span className="note needsclick" style={{ fontSize: '14px' }}>
        (This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
      </span>
    </div>
  );
};

export default CommonFileBody;
