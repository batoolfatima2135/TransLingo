import Link from "next/link";
import { Languages } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-indigo-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-gray-900"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-700 text-white">
            <Languages size={14} />
          </div>
          TransLingo
        </Link>

        <p className="text-sm text-gray-400">
          © 2026 TransLingo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
