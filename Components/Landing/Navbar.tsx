"use client";

import Link from "next/link";
import { Languages, LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import Logo from "../logo";

export default function Navbar() {
  const { data: session, status } = useSession();
  useEffect(() => {
    console.log("SESSION:", session);
  }, [session]);
  const callBackend = async () => {
    if (!session?.accessToken) {
      console.log("No access token");
      return;
    }

    const response = await fetch("http://localhost:5127/api/test/protected", {
      headers: {
        Authorization: `Bearer `,
      },
    });

    const data = await response.json();

    console.log("BACKEND RESPONSE:", data);
  };
  const isLoading = status === "loading";
  const isAuthenticated = !!session;

  return (
    <header className="sticky top-0 z-50 border-b border-indigo-100/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Logo />
        <button onClick={callBackend}>Test Backend</button>
        {/* Navigation */}
        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#features"
            className="text-sm text-gray-600 transition hover:text-indigo-600"
          >
            Features
          </Link>

          <Link
            href="/#pricing"
            className="text-sm text-gray-600 transition hover:text-indigo-600"
          >
            Pricing
          </Link>

          <Link
            href="/#how-it-works"
            className="text-sm text-gray-600 transition hover:text-indigo-600"
          >
            How it works
          </Link>
        </nav>

        {/* Authentication */}
        <div className="flex items-center gap-3">
          {isLoading ? (
            <div className="h-9 w-24 animate-pulse rounded-lg bg-gray-100" />
          ) : isAuthenticated ? (
            <AuthenticatedActions session={session} />
          ) : (
            <GuestActions />
          )}
        </div>
      </div>
    </header>
  );
}

function GuestActions() {
  return (
    <>
      <Link
        href="/login"
        className="hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-indigo-50 hover:text-cyan-700 sm:block"
      >
        Log in
      </Link>

      <Link
        href="/register"
        className="rounded-lg bg-cyan-700 px-4 py-2 text-sm font-medium text-white  bg-gradient-to-r from-teal-700 to-cyan-700 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-700/20 transition duration-200 hover:-translate-y-0.5 hover:from-teal-800 hover:to-cyan-800 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-600/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        Get started
      </Link>
    </>
  );
}

function AuthenticatedActions({
  session,
}: {
  session: {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      firstName?: string | null;
      lastName?: string | null;
    };
  };
}) {
  const name =
    session.user?.name ||
    `${session.user?.firstName} ${session.user?.lastName}`;
  const email = session.user?.email;

  return (
    <>
      <Link
        href="/dashboard"
        className="hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-indigo-50 hover:text-indigo-700 sm:block"
      >
        Dashboard
      </Link>

      <div className="flex items-center gap-3">
        <div className="hidden text-right sm:block">
          {name && <p className="text-sm font-medium text-gray-900">{name}</p>}

          {email && <p className="text-xs text-gray-500">{email}</p>}
        </div>

        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
        >
          <LogOut size={16} />
          <span className="hidden sm:inline">Log out</span>
        </button>
      </div>
    </>
  );
}
