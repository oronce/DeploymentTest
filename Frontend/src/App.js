import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
  setIsDarkMode((prevMode) => {
    const newMode = !prevMode;
    if (!newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    return newMode;
  });
};

  const Header = ({isDarkMode,toggleTheme}) => {
    return (
      <header className="p-4">
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-md ${
            isDarkMode ? "bg-gray-200 text-gray-900" : "bg-gray-800 text-white"
          }`}
        >
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>
    );
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100 bg-white dark:bg-gray-900">
    <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Welcome to React
        </h1>
      </main>
    </div>
  );
}

export default App;
