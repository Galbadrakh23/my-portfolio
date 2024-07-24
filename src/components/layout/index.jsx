import About from "../about/about";
import Header from "../header/header";
import HeroSection from "../hero/herosection";
import Skills from "../skills/skills";
import Experience from "../experience/experience";
import Works from "../works/works";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <Works />
      <Contact />
      <Footer />
      {children}
    </>
  );
};

export default Layout;
