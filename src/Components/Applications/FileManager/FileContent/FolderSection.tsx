import { Folders } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { Fragment } from "react";

const FolderSection = () => {
  const { myFile } = useAppSelector((state) => state.fileManager);
  return (
    <Fragment>
      <h4 className="mt-4 mb-2">{Folders}</h4>
      <ul className="folder">
        {myFile.map((item, index) => (
          <Fragment key={index}>
            {item.title && (
              <li className="folder-box" key={index}>
                <div className="d-block">
                  <i className={item.folderClass}></i>
                  <i className="fa fa-ellipsis-v me-0 f-14 ellips"></i>
                  <div className="mt-3">
                    <h6>{item.title}</h6>
                    <p>
                      {item.folderSize}
                      <span className="pull-right">
                        <i className="fa fa-clock-o"></i>
                        {item.modify}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </Fragment>
  );
};

export default FolderSection;
