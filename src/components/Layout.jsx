import Header from './Header.jsx';
import Footer from './Footer.jsx';
import MainSection from './MainSection.jsx';

function Layout() {
  return (
    <div className="layout">
      <header>
        <Header />
      </header>
      <section>
        <MainSection />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;