import UserProfile from "@/components/UserProfile";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#E6EFFA]">
      <UserProfile />
    </div>
  );
}
