import { Files } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { FileMainContentPropsType } from "@/Types/FileManagerType";
import React, { Fragment } from "react";
import { CardBody } from "reactstrap";
import FileList from "./FileList";
import FolderSection from "./FolderSection";
import QuickAccess from "./QuickAccess";

const FileMainContent: React.FC<FileMainContentPropsType> = ({ fileList }) => {
  const { searchTerm } = useAppSelector((state) => state.fileManager);
  return (
    <CardBody className="file-manager pt-0">
      {!searchTerm && (
        <Fragment>
          <QuickAccess />
          <FolderSection />
        </Fragment>
      )}
      <h4 className="mt-4">{Files}</h4>
      <FileList myFile={fileList} />
    </CardBody>
  );
};

export default FileMainContent;
