import Link from "next/link";

export default function SideBer() {
  const menus = ["ホーム", "検索", "通知", "メッセージ", "プロフィール"];

  return (
    <nav className="flex flex-col gap-4 p-4 text-lg bg-sky-100 sticky top-0 h-[calc(100vh)]">
      <ul className="flex flex-col gap-6">
        {menus.map((label, index) => (
          <li key={index}>
            <Link
              href="/"
              className="block px-4 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
