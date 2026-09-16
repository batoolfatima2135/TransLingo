"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CreditCard,
  History,
  Languages,
  LayoutDashboard,
  Settings,
  Sparkles,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Translate",
    href: "/dashboard/translate",
    icon: Languages,
  },
  {
    name: "History",
    href: "/dashboard/history",
    icon: History,
  },
];

const secondaryNavigation = [
  {
    name: "Billing",
    href: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  useEffect(() => {
    console.log("SESSION:", session);
  }, [session]);
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-indigo-100 bg-white lg:block">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-20 items-center px-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-xl font-bold text-gray-900"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Languages size={19} />
            </div>
            TransLingo
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-4">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Workspace
          </p>

          <div className="space-y-1">
            {navigation.map((item) => (
              <NavItem
                key={item.href}
                item={item}
                active={pathname === item.href}
              />
            ))}
          </div>

          <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Account
          </p>

          <div className="space-y-1">
            {secondaryNavigation.map((item) => (
              <NavItem
                key={item.href}
                item={item}
                active={pathname === item.href}
              />
            ))}
          </div>
        </nav>

        {/* Upgrade card */}
        <div className="p-4">
          <div className="rounded-2xl bg-indigo-50 p-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
              <Sparkles size={18} />
            </div>

            <h3 className="mt-3 text-sm font-semibold text-gray-900">
              Need more words?
            </h3>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Upgrade to Pro and get up to 100,000 words every month.
            </p>

            <Link
              href="/dashboard/billing"
              className="mt-3 block text-xs font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Upgrade to Pro →
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavItem({
  item,
  active,
}: {
  item: {
    name: string;
    href: string;
    icon: React.ElementType;
  };
  active: boolean;
}) {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
        active
          ? "bg-indigo-50 text-indigo-700"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <Icon size={18} />
      {item.name}
    </Link>
  );
}
