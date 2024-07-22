const ColumnRight = () => {
  return (
    <div className="mt-8 lg:mt-0 lg:flex lg:pl-60 lg:mr-8">
      <img
        width={280}
        height={320}
        src="/images/Homelander.jpg"
        alt="Homelander"
        className="rounded-lg shadow-lg absolute z-10 border-white border-8"
      />
      <div className="w-[280px] h-[320px] bg-gray-200 border-white border-8 z-0 ml-4 mt-0.25"></div>
    </div>
  );
};

export default ColumnRight;
