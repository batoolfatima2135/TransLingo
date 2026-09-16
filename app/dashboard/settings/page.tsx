"use client";

import { Bell, Check, LogOut, Mail, User } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function SettingsPage() {
  const [name, setName] = useState("Batool Fatima");
  const [email] = useState("batool@example.com");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // Later:
    // PUT /api/users/me

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
          Settings
        </p>

        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
          Account settings
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Manage your account information and preferences.
        </p>
      </div>

      <div className="mt-8 max-w-3xl space-y-6">
        {/* Profile */}
        <section className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm shadow-indigo-50">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <User size={18} />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">Profile</h2>

              <p className="mt-1 text-sm text-gray-500">
                Your basic account information.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Name
              </label>

              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  value={email}
                  disabled
                  className="w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-500"
                />
              </div>

              <p className="mt-2 text-xs text-gray-400">
                Your email is managed by your authentication provider.
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
            {saved ? (
              <span className="flex items-center gap-2 text-sm font-medium text-emerald-600">
                <Check size={16} />
                Changes saved
              </span>
            ) : (
              <span />
            )}

            <button
              type="button"
              onClick={handleSave}
              className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Save changes
            </button>
          </div>
        </section>

        {/* Notifications */}
        <section className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm shadow-indigo-50">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Bell size={18} />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">Notifications</h2>

              <p className="mt-1 text-sm text-gray-500">
                Choose which notifications you receive.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            <ToggleSetting
              title="Usage reminders"
              description="Notify me when I'm approaching my monthly quota."
              defaultChecked
            />

            <ToggleSetting
              title="Billing notifications"
              description="Receive important updates about your subscription."
              defaultChecked
            />
          </div>
        </section>

        {/* Logout */}
        <section className="rounded-2xl border border-red-100 bg-white p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-semibold text-gray-900">Sign out</h2>

              <p className="mt-1 text-sm text-gray-500">
                Sign out of your TransLingo account on this device.
              </p>
            </div>

            <button
              type="button"
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50"
            >
              <LogOut size={16} />
              Sign out
            </button>
          </div>
        </section>

        {/* Danger zone */}
        <section className="rounded-2xl border border-red-100 bg-red-50/30 p-6">
          <h2 className="font-semibold text-red-700">Danger zone</h2>

          <p className="mt-1 text-sm text-gray-500">
            Permanently delete your TransLingo account and associated data.
          </p>

          <button
            type="button"
            disabled
            className="mt-5 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-medium text-red-500 opacity-50"
          >
            Delete account
          </button>
        </section>
      </div>
    </div>
  );
}

function ToggleSetting({
  title,
  description,
  defaultChecked = false,
}: {
  title: string;
  description: string;
  defaultChecked?: boolean;
}) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <div className="flex items-center justify-between gap-6">
      <div>
        <p className="text-sm font-medium text-gray-800">{title}</p>

        <p className="mt-1 text-xs leading-5 text-gray-400">{description}</p>
      </div>

      <button
        type="button"
        onClick={() => setChecked(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          checked ? "bg-indigo-600" : "bg-gray-200"
        }`}
        aria-pressed={checked}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
            checked ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}
