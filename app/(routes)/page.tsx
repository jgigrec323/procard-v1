import CardList from "@/components/card-list";
import Hero from "@/components/hero";

const Main = () => {
  return (
    <section className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="px-4 md:px-10 h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col justify-center items-center w-full">
        <Hero />
      </div>

      {/* CardList Section */}
      <div className="mt-20 w-full flex justify-center">
        <CardList />
      </div>
    </section>
  );
};

export default Main;
