"use client";

import { Bell, UserRound } from "lucide-react";
import { useSession } from "next-auth/react";

export default function DashboardHeader() {
  const { data: session } = useSession();

  const firstName = session?.user?.firstName;
  const lastName = session?.user?.lastName;
  const name = session?.user?.name;
  const email = session?.user?.email;
  const image = session?.user?.image;

  const displayName = name || `${firstName} ${lastName}` || "there";

  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-indigo-600">Dashboard</p>

        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
          Good evening, {displayName} 👋
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          {email
            ? `Here is an overview of your TransLingo account. You are logged in as ${email}.`
            : "Here is an overview of your TransLingo account."}
        </p>
      </div>

      <div className="flex items-center gap-3">
        {image ? (
          <img
            src={image}
            alt={name ?? email ?? "User"}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-indigo-100 bg-white text-gray-500">
            <UserRound size={20} />
          </div>
        )}

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-100 bg-white text-gray-500 transition hover:bg-indigo-50 hover:text-indigo-600"
          aria-label="Notifications"
        >
          <Bell size={18} />
        </button>
      </div>
    </div>
  );
}
