import Image from "next/image";

export default function UserCard() {
  return (
    <div className="border border-gray-400 p-10">
      <Image
        src="/images/demo.png"
        alt="でも"
        width="300"
        height="300"
        className="rounded-full"
      />
      <p>ユーザー名</p>
      <p>役職</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas
        officiis quia amet sunt impedit dolorem corporis! Magnam temporibus
        blanditiis expedita cupiditate provident fugiat quia veritatis
        voluptatibus? Id, totam praesentium.
      </p>
    </div>
  );
}
