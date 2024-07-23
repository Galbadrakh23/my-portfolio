const menuList = [{ label: "About me", link: "/#about" }];
const AboutMeButton = () => {
  return (
    <div className="containe flex justify-center">
      <button className="w-[90px] h-[30px] text-sm rounded-full bg-gray-200 px-2">
        {menuList.map((menu) => (
          <a href={menu.link}>{menu.label}</a>
        ))}
      </button>
    </div>
  );
};
export default AboutMeButton;
