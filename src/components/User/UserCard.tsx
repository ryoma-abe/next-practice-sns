import Image from "next/image";

export default function UserCard() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center gap-4">
      <Image
        src="/images/demo.png"
        alt="でも"
        width={120}
        height={120}
        className="rounded-full"
      />
      <div className="text-center">
        <p className="text-xl font-semibold">ユーザー名</p>
        <p className="text-sm text-gray-500">役職</p>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas
        officiis quia amet sunt impedit dolorem corporis! Magnam temporibus
        blanditiis expedita cupiditate provident fugiat quia veritatis
        voluptatibus? Id, totam praesentium.
      </p>
    </div>
  );
}
