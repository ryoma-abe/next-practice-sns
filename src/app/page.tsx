import { Suspense} from "react";
import SideBer from "@/components/SideBer";
import TimeLine from "@/components/User/TimeLine";
import UserCard from "@/components/User/UserCard";

export default function Home() {
  return (
    <div className="container mx-auto px-4 relative">
      <div className="grid grid-cols-10 gap-10 min-h-dvh">
        <div className="col-span-3 sm:col-span-2 lg:col-span-2">
          <SideBer />
        </div>
        <div className="col-span-7 sm:col-span-8 lg:col-span-5">
          <Suspense fallback={<p>TimeLineを読み込み中...</p>}>
            <TimeLine />
          </Suspense>
        </div>
        <div className="col-span-3 hidden lg:block">
          <UserCard />
        </div>
      </div>
    </div>
  );
}
