import React, { useEffect } from 'react';
import SVG from "@/CommonComponent/SVG";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setDarkMode } from "@/Redux/Reducers/LayoutSlice";

export const DarkMode = () => {
  const { darkMode } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    dispatch(setDarkMode(savedDarkMode));
    if (savedDarkMode) {
      document.body.classList.add("dark-only");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark-only");
    }
  }, [dispatch]);

  const handleDarkMode = () => {
    const newDarkMode = !darkMode;
    dispatch(setDarkMode(newDarkMode));
    localStorage.setItem("darkMode", newDarkMode ? "true" : "false");
    if (newDarkMode) {
      document.body.classList.add("dark-only");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark-only");
    }
  };

  return (
    <li onClick={handleDarkMode}>
      <div className={`mode ${darkMode ? "active" : ""}`}>
        <SVG iconId="Moon" />
      </div>
    </li>
  );
};
