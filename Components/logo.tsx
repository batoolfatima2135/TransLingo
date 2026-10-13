import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="TransLingo home"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-cyan-700 text-white shadow-lg shadow-teal-700/20">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path
            d="M4 5h10M9 3v2c0 5-2.5 8-5 10M5 9c1.2 2 3.2 4 6 5M13 19l4-10 4 10M14.5 16h5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className="text-2xl font-bold tracking-tight text-slate-900">
        Trans<span className="text-teal-700">Lingo</span>
      </span>
    </Link>
  );
}
