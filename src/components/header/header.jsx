import NavSection from "./nav-section";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-40 py-4 mx-auto">
      <h1 className="firstName text-[30px] font-bold text-grey-900">
        Galbadrakh
      </h1>
      <NavSection />
    </header>
  );
};

export default Header;
