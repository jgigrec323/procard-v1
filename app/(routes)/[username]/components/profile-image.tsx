import Image from "next/image";

interface ProfileImageProps {
  url: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ url }) => {
  return (
    <div>
      <Image
        src={url}
        alt="Profile Image"
        width={160}
        height={160}
        className="rounded-full border-4 border-black"
      />
    </div>
  );
};

export default ProfileImage;
