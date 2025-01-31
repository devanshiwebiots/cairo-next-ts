"use client";
import { Fragment, useEffect, useState } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      {isLoading && (
        <div className="loader-wrapper">
          <div className="loader">
            <div className="loader4"></div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Loading;
