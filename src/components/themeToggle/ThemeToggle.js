import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const ThemeToggle = () => {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default ThemeToggle;
