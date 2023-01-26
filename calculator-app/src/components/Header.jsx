import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleTheme = (x) => {
    if (x.target.id === "a") {
      setTheme("dark");
    } else if (x.target.id === "b") {
      setTheme("light");
    } else {
      setTheme("purple");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const switchToggle = ["a", "b", "c"];

  return (
    <header>
      <a href="/">calc</a>

      <div className="switch">
        <p>theme</p>

        <div className="switch-click">
          {switchToggle.map((toggle) => (
            <div className="switch-button" key={toggle}>
              <span>{toggle}</span>
              <div className="switcher">
                <button onClick={toggleTheme} id={toggle}>{toggle}</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </header>
  );
};

export default Header;
