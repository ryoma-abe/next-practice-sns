import Image from "next/image";

export default function User() {
  return (
    <div className="p-4">
      <div className="flex items-center gap-3">
        <Image
          src="/images/demo.png"
          alt="でも"
          width={48}
          height={48}
          className="rounded-full"
        />
        <p className="text-sm font-medium">User名が入ります</p>
      </div>

      <div className="h-24 border mt-4 rounded-md bg-gray-50" />
    </div>
  );
}
