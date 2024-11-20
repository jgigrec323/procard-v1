import { cn } from "@/lib/utils";

interface InfoSectionProps {
  orientation: "left" | "right";
  textColor: string;
  bgColor: string;
  children: React.ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  orientation,
  textColor,
  bgColor,
  children,
}) => {
  return (
    <section
      className={cn(
        "h-screen p-8 flex items-center justify-center rounded-2xl w-full",
        bgColor,
        textColor
      )}
    >
      <div
        className={cn(
          "w-full max-w-4xl",
          orientation === "left" ? "text-left" : "text-right"
        )}
      >
        <p className="text-5xl font-bold">{children}</p>
      </div>
    </section>
  );
};

export default InfoSection;
