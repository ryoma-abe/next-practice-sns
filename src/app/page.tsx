import SideBer from "@/components/SideBer";
import TimeLine from "@/components/User/TimeLine";
import UserCard from "@/components/User/UserCard";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-10 gap-10 min-h-dvh">
        <div className="col-span-2 bg-gray-100">
          <SideBer />
        </div>
        <div className="col-span-5">
          <TimeLine />
        </div>
        <div className="col-span-3">
          <UserCard />
        </div>
      </div>
    </div>
  );
}
