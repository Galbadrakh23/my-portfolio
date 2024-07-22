import ColumnLeft from "./column-left";
import ColumnRight from "./column-right";
const Container = () => {
  return (
    <section>
      <div
        className="max-w-8xl  flex lg:flex-row items-center justify-center gap-12"
        id="hero"
      >
        <ColumnLeft />
        <ColumnRight />
      </div>
    </section>
  );
};
export default Container;
