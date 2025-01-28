import Logo from "@/components/logo";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="mb-10">
        <Logo></Logo>
      </div>
      {children}
    </main>
  );
};

export default AuthLayout;
