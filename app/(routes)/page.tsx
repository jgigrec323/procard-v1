import Hero from "@/components/hero";
import InfoSection from "@/components/info-section";

const Main = () => {
  return (
    <>
      <main
        className="
        px-4 md:px-10
        h-[60vh] md:h-[70vh] lg:h-[80vh]
        flex flex-col justify-center items-center 
        relative w-full"
      >
        <Hero />
      </main>
      <InfoSection
        orientation="left"
        bgColor="bg-[#7575750f]"
        textColor="text-black"
      >
        Elles sont l'occasion de vous démarquer de la concurrence et de faire
        une impression durable sur vos clients, prospects, partenaires et
        collègues.
      </InfoSection>
      <InfoSection
        orientation="right"
        textColor="text-white"
        bgColor="bg-black"
      >
        Nos cartes sont élégantes, innovantes et durables. Elles attireront
        l'attention de votre audience, susciteront la curiosité et vous aideront
        à vous positionner comme un professionnel de confiance et de qualité.
      </InfoSection>
      <InfoSection
        orientation="left"
        textColor="text-black"
        bgColor="bg-[#E3CC00]"
      >
        Avec nos cartes, vous faites une déclaration d'intention. Vous montrez
        que vous êtes une personne ou une entreprise qui se soucie de
        l'excellence et qui est prête à investir dans son image.
      </InfoSection>
    </>
  );
};

export default Main;
