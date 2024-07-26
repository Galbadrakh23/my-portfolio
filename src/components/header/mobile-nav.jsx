import { FiMenu } from "react-icons/fi";
import MobileMenu from "./mobile-menu";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        <FiMenu size={24} className="md:hidden" />
      </button>
      {isOpen && <MobileMenu />}
    </div>
  );
};

export default MobileNav;
