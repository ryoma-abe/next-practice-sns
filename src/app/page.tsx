import { Suspense } from "react";
import SideBer from "@/components/SideBer";
import TimeLine from "@/components/TimeLine";
import UserCard from "@/components/User/UserCard";

export default function Home() {
  return (
    <div className="container mx-auto px-4 relative">
      <div className="min-h-dvh">
        <div className="fixed top-0 left-0 h-screen w-[20%]">
          <SideBer />
        </div>
        <div className="w-[70%] ml-auto  lg:w-[40%] lg:mx-auto ">
          <Suspense fallback={<p>TimeLineを読み込み中...</p>}>
            <TimeLine />
          </Suspense>
        </div>
        <div className="hidden lg:block fixed top-6 right-0 w-[30%]">
          <UserCard />
        </div>
      </div>
    </div>
  );
}
