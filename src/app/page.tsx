import PostModal from "@/components/PostModal";
import SideBer from "@/components/SideBer";
import TimeLine from "@/components/User/TimeLine";
import UserCard from "@/components/User/UserCard";
const isOpen = false;
export default function Home() {
  return (
    <div className="container mx-auto px-4 relative">
      <div className="grid grid-cols-10 gap-10 min-h-dvh">
        <div className="col-span-3 sm:col-span-2 lg:col-span-2">
          <SideBer />
        </div>
        <div className="col-span-7 sm:col-span-8 lg:col-span-5">
          <TimeLine />
        </div>
        <div className="col-span-3 hidden lg:block">
          <UserCard />
        </div>
      </div>
      {isOpen && <PostModal />}
    </div>
  );
}
