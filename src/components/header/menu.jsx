const menuList = [
  { label: "Home", link: "/" },
  { label: "About", link: "/#about" },
  { label: "Testimonials", link: "/#testimonials" },
  { label: "Contact", link: "/#contact" },
];
const Menu = () => {
  return (
    <div>
      <ul className="flex flex-row items-center  my-1 gap-6">
        {menuList.map((menu) => (
          <li>
            <a href={menu.link}>{menu.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
