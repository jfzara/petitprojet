// components/Header.jsx
import React from 'react';

// Le Header reçoit les props currentTheme et toggleTheme
function Header({ currentTheme, toggleTheme }) {
  return (
    <nav className="menu">
      <ul className="menu__liste">
        <li className="menu__item">
          <a href="#" className="menu__lien">Lien1</a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__lien">Lien2</a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__lien">Lien3</a>
        </li>
      </ul>
      {/* Ajoutez le bouton ici, juste après la liste des liens */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {currentTheme === 'light' ? '🌙 ' : '☀️ '}
      </button>
    </nav>
  );
}

export default Header;