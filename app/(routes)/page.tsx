import Hero from "@/components/hero";

const Main = () => {
  return (
    <main
      className="
        px-4 md:px-10
        h-[60vh] md:h-[70vh] lg:h-[80vh]
        flex flex-col justify-center items-center 
        relative w-full
      "
    >
      <Hero />
    </main>
  );
};

export default Main;
