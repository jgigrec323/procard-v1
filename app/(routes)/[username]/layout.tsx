// app/(profile)/[username]/layout.tsx
import React from "react";
import ProfileInfos from "./components/profile-infos";
import NavigationBar from "./components/navigation-bar";
import Header from "./components/header";

const ProfileLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { username: string };
}) => {
  const { username } = await params;
  return (
    <>
      <Header />
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32">
        <div className="flex flex-col mt-4 sm:mt-6 md:mt-8 space-y-4 sm:space-y-6 md:space-y-8">
          {/* Pass username to ProfileInfos and NavigationBar if required */}
          <ProfileInfos />
          <div className="w-full">
            <div className="flex justify-center md:justify-start w-full  p-4 rounded-lg">
              <NavigationBar username={username} />
            </div>
          </div>
        </div>

        <div className="my-4 mx-4">{children}</div>
      </div>
    </>
  );
};

export default ProfileLayout;
