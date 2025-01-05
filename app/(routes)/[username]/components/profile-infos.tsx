import ProfileImage from "./profile-image";

const ProfileInfos = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center md:items-center space-y-6 md:space-y-0 md:space-x-8 text-center md:text-left">
      {/* Profile Image */}
      <ProfileImage url="/images/img-profile.jpg" />

      {/* Contact Info */}
      <div>
        <div className="flex flex-col md:flex-row items-center md:items-center md:space-y-0 md:space-x-2">
          <h1 className="text-xl sm:text-2xl font-bold">Gregory Sylvain</h1>
          <p className="text-sm text-gray-600">@gregorysylvain</p>
        </div>
        <p className="text-md sm:text-lg mt-2 md:mt-0 text-gray-600">
          Fullstack Developer
        </p>
        <p className="mt-2 text-sm sm:text-md text-gray-500">
          Bio goes here. A short introduction or tagline for the user.
        </p>
      </div>
    </div>
  );
};

export default ProfileInfos;
