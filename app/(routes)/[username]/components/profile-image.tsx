interface ProfileImageProps {
  url: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ url }) => {
  return (
    <div className="rounded-full w-[160px] h-[160px] overflow-hidden border-2 border-gray-200">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={url}
        alt="Profile Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfileImage;
