import ColumnLeft from "./column-left";
import ColumnRight from "./column-right";

const Container = () => {
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 dark:bg-gray-600">
        <ColumnLeft />
        <ColumnRight />
      </div>
    </section>
  );
};
export default Container;
