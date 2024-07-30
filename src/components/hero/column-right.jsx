const ColumnRight = () => {
  return (
    <div className="mt-8 lg:mt-0 lg:flex lg:pl-60 lg:mr-8">
      <img
        width={280}
        height={320}
        src="/images/Koala.webp"
        alt="Random Picture"
        className="rounded-lg shadow-lg absolute border-white border-8"
      />
      <div className="w-[280px] h-[380px] md:w-[290px] md:h-[380px] bg-gray-200 border-white border-8 md:ml-4 md:mt-4"></div>
    </div>
  );
};

export default ColumnRight;
