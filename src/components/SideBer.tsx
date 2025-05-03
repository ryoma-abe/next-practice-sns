import Link from "next/link";
import { Home, Search, Bell, PenLine, User } from "lucide-react"; // アイコンは適宜変更可

export default function SideBer() {
  const menus = [
    { label: "ホーム", icon: <Home size={20} /> },
    { label: "検索", icon: <Search size={20} /> },
    { label: "通知", icon: <Bell size={20} /> },
    { label: "ポスト", icon: <PenLine size={20} /> },
    { label: "プロフィール", icon: <User size={20} /> },
  ];

  return (
    <nav className="flex flex-col gap-4 p-4 text-lg sticky top-0 h-[100vh] shadow-xl">
      <ul className="flex flex-col gap-6">
        {menus.map((menu, index) => (
          <li key={index}>
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg hover:bg-gray-200 transition p-0 lg:px-4 lg:py-2"
            >
              <span className="mx-auto lg:m-0">{menu.icon}</span>
              <span className="hidden lg:inline">{menu.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
