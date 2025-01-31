"use client";
import { FunctionComponent, useEffect, useState } from "react";

const DefaultDashboard = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();
  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const newClient = (await import("@/Components/Miscellaneous/Maps/LeafletMap")).default;
        setClient(() => newClient);
      }
    })();
  }, []);
  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default DefaultDashboard;
