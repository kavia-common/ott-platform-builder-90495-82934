import React, { useState, useEffect } from 'react';
import './App.css';
import Screen35 from './screens/Screen35';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('dark');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App" style={{ background: '#000' }}>
      {/* Keep a global theme toggle overlayed above the screen */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>

      {/* Render Screen 35 scaled to fit viewport */}
      <Screen35 />
    </div>
  );
}

export default App;
