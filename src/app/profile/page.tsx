"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* プロフィール上部 */}
      <div className="flex items-center gap-6 mb-8">
        <Image
          src="/images/demo.png"
          alt="プロフィール画像"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold">りょうま</h2>
          <p className="text-gray-500">フリーランスエンジニア</p>
        </div>
      </div>

      {/* プロフィール詳細 */}
      <div className="bg-white p-4 rounded-lg shadow space-y-3">
        <p>
          <span className="font-semibold">自己紹介：</span>{" "}
          北海道で活動中のWebエンジニア。ShopifyとNext.jsが得意です。
        </p>
        <p>
          <span className="font-semibold">メール：</span> ryoma@example.com
        </p>
        <p>
          <span className="font-semibold">所在地：</span> 北海道・十勝
        </p>
      </div>
      <div className="mt-10">
        <Link href="/">←ホームへ戻る</Link>
      </div>
    </div>
  );
}
