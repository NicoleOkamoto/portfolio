import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      <img
        src={theme === 'light' ? '/icons/dark.png' : '/icons/light.png'}
        alt={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        style={{ width: '40px', height: '40px' }}
      />
    </button>
  );
};

export default ThemeToggle;
