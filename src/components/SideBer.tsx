"use client";

import Link from "next/link";
import { Home, Search, Bell, User } from "lucide-react";

export default function SideBer() {
  const menus = [
    { label: "ホーム", icon: <Home size={20} />, href: "/" },
    { label: "検索", icon: <Search size={20} />, href: "/" },
    { label: "通知", icon: <Bell size={20} />, href: "/" },
    { label: "プロフィール", icon: <User size={20} />, href: "/profile" },
  ];

  return (
    <nav className="py-4 lg:p-4 text-lg shadow-xl h-full">
      <ul className="flex flex-col gap-6">
        {menus.map((menu, index) => (
          <li key={index}>
            {menu.href ? (
              <Link
                href={menu.href}
                className="flex items-center gap-3 rounded-lg hover:bg-gray-200 transition p-0 lg:px-4 lg:py-2"
              >
                <span className="mx-auto xl:m-0">{menu.icon}</span>
                <span className="hidden xl:inline">{menu.label}</span>
              </Link>
            ) : (
              <button className="flex items-center gap-3 w-full rounded-lg hover:bg-gray-200 transition p-0 lg:px-4 lg:py-2">
                <span className="mx-auto xl:m-0">{menu.icon}</span>
                <span className="hidden xl:inline">{menu.label}</span>
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
