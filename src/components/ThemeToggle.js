import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      <img
        src={theme === 'light' ? '/dark-mode_5262027.png' : '/dark-mode_5262027.png'}
        alt={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        style={{ width: '30px', height: '30px' }}
      />
    </button>
  );
};

export default ThemeToggle;
