import React, { useState } from "react";

interface DarkModeToggleProps {
  onChange: (isDarkMode: boolean) => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ onChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    onChange(isDarkMode); // Pass the dark mode state
  };

  return (
    <button onClick={handleToggle}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;