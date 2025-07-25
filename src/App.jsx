// App.js
import React, { useState } from 'react';
import Layout from './components/Layout.jsx'; // Assurez-vous que le chemin est correct

import './index.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    // L'attribut data-theme est toujours sur la div englobante
    <div data-theme={theme}>
      {/* Passez l'état du thème et la fonction de bascule au Layout */}
      <Layout currentTheme={theme} toggleTheme={toggleTheme} />
    
    </div>
  );
}

export default App;