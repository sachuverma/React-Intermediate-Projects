import React, { useState, useEffect } from "react";

import data from "./data";
import Article from "./Article";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // load previous theme if present
    let prevTheme = localStorage.getItem("dark-mode");
    setDarkMode(prevTheme);
  }, []);

  useEffect(() => {
    if (darkMode) {
      // set dark mode theme
      document.documentElement.className = "dark-theme";
    } else {
      // remove dark mode
      document.documentElement.className = "light-theme";
    }
    // store theme to local storage for next visit
    localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>my blogs</h1>
          <button className="btn" onClick={() => setDarkMode(!darkMode)}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((post) => {
          return <Article key={post.id} {...post} />;
        })}
      </section>
    </main>
  );
}

export default App;
