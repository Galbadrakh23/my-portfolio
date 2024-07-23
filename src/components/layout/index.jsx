import About from "../about/about";
import Header from "../header/header";
import HeroSection from "../hero/herosection";
import Skills from "../skills/skills";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Skills />
      {children}
    </>
  );
};

export default Layout;
