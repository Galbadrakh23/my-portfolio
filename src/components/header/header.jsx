import MobileMenu from "./mobile-menu";
import NavSection from "./nav-section";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 mx-auto sm:px-8 lg:px-12">
      <h1 className="text-[36px] font-semibold text-grey-900 sm:text-[40px] lg:text-[50px]">
        23
      </h1>
      <MobileMenu />
      <nav className="hidden sm:flex items-center gap-4 lg:gap-8">
        <NavSection />
      </nav>
    </header>
  );
};

export default Header;
