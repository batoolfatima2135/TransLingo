import { ArrowRight, Clock3 } from "lucide-react";
import Link from "next/link";

const translations = [
  {
    source: "English",
    target: "German",
    original: "Welcome to TransLingo.",
    translated: "Willkommen bei TransLingo.",
    words: 4,
    date: "2 minutes ago",
  },
  {
    source: "German",
    target: "English",
    original: "Wie geht es dir?",
    translated: "How are you?",
    words: 4,
    date: "1 hour ago",
  },
  {
    source: "English",
    target: "French",
    original: "Have a nice day!",
    translated: "Bonne journée !",
    words: 5,
    date: "Yesterday",
  },
];

export default function RecentTranslations() {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Recent translations
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your latest translation activity.
          </p>
        </div>

        <Link
          href="/dashboard/history"
          className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          View history
          <ArrowRight size={15} />
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm shadow-indigo-50">
        {translations.map((translation, index) => (
          <div
            key={`${translation.original}-${translation.date}`}
            className={`flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between ${
              index !== translations.length - 1
                ? "border-b border-indigo-50"
                : ""
            }`}
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600">
                  {translation.source}
                </span>

                <ArrowRight size={13} className="text-gray-300" />

                <span className="rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
                  {translation.target}
                </span>
              </div>

              <p className="mt-3 truncate text-sm font-medium text-gray-800">
                {translation.original}
              </p>

              <p className="mt-1 truncate text-sm text-gray-400">
                {translation.translated}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-4 text-xs text-gray-400">
              <span>{translation.words} words</span>

              <span className="flex items-center gap-1">
                <Clock3 size={13} />
                {translation.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
