import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import MainSection from './MainSection.jsx';
import Composant from './Composant.jsx';
// Le Layout reçoit les props et les transmet au Header
function Layout({ currentTheme, toggleTheme }) {
  return (
    <div className="layout">
      <header>
        {/* Passez les props au Header */}
        <Header currentTheme={currentTheme} toggleTheme={toggleTheme} />
      </header>
      <section>
        <MainSection />
      </section>
      <div>
         <Composant/>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;