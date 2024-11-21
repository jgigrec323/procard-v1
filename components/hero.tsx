import Link from "next/link";
import { CiDesktopMouse2 } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="text-center relative w-full h-full flex flex-col justify-center items-center px-4">
      <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl leading-tight">
        Vos cartes de visite sont votre première impression.
      </h1>
      <p className="mt-4 text-lg md:text-xl lg:text-2xl">
        Faites-en une bonne{" "}
        <Link
          className="font-bold uppercase text-dgreen hover:underline"
          href={"/produits"}
        >
          maintenant !
        </Link>
      </p>
      {/* Scroll Section */}
      <div className="flex absolute -bottom-10 md:flex flex-col items-center text-sm md:text-base">
        <CiDesktopMouse2 size={24} />
        <p>Scrollez</p>
      </div>
    </div>
  );
};

export default Hero;
