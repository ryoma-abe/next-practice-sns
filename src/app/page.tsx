import UserCard from "@/components/User/UserCard";

export default function Home() {
  return (
    <div className="grid grid-cols-3">
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}
