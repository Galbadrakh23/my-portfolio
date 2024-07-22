import About from "../About/about";
import Header from "../header/header";
import HeroSection from "../hero/herosection";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <HeroSection />
      {children}
    </>
  );
};

export default Layout;
