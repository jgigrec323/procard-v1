import Header from "./components/header";
import ProfileImage from "./components/profile-image";

const ProfilePage = () => {
  return (
    <div>
      <div className="position-relative">
        <Header></Header>
        <div className="ml-44 -mt-4">
          <ProfileImage url="/empty"></ProfileImage>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
