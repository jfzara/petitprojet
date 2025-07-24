import React, { useState } from 'react';
import Layout from './components/Layout.jsx';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div data-theme={theme}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Mode sombre' : '☀️ Mode clair'}
      </button>
      <Layout />
    </div>
  );
}

export default App;