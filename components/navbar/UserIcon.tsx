import { LuUser } from "react-icons/lu";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt=""
        width={28} // یا عدد مناسب برای اندازه تصویر
        height={28} // یا عدد مناسب برای اندازه تصویر
        className="!w-7 !h-7 rounded-full object-cover"
      />
    );
  }

  return <LuUser className="!w-6 !h-6 rounded-full bg-primary text-white " />;
}
export default UserIcon;
