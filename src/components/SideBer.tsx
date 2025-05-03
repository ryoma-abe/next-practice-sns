import Link from "next/link";
import { Home, Search, Bell, Mail, User } from "lucide-react"; // アイコンは適宜変更可

export default function SideBer() {
  const menus = [
    { label: "ホーム", icon: <Home size={20} /> },
    { label: "検索", icon: <Search size={20} /> },
    { label: "通知", icon: <Bell size={20} /> },
    { label: "メッセージ", icon: <Mail size={20} /> },
    { label: "プロフィール", icon: <User size={20} /> },
  ];

  return (
    <nav className="flex flex-col gap-4 p-4 text-lg bg-sky-100 sticky top-0 h-[100vh]">
      <ul className="flex flex-col gap-6">
        {menus.map((menu, index) => (
          <li key={index}>
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
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
