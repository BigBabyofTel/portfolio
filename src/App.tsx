import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //state change from darkmodetoggle
  const handleDarkModeChange = (newIsDarkMode: boolean) => {
    setIsDarkMode(newIsDarkMode)
  };
//add dark mode class conditionally
const className = isDarkMode ? "dark" : "";
  return (
    <>
    <div className={className && "dark"}>
    <main className="dark:bg-white">
    <h1>T. Augustus Baker</h1>
    <p>By day, I'm an English teacher for stage 5.</p>
    <DarkModeToggle onChange={handleDarkModeChange} />
    </main>
    </div>
    </>
  )
}

export default App
