import React from 'react'
import { useDarkMode } from '../../hooks/useDarkMode'

const Nav = props => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

  return (
    <div data-testid="nav" className="navbar">
      <h1>Player Stats</h1>
      <div className="dark-mode__toggle">
        <div data-testid="toggle-mode"
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </div>
  );
}

export default Nav;