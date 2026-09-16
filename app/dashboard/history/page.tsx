"use client";

import { ArrowRight, Clock3, Copy, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const initialTranslations = [
  {
    id: 1,
    sourceLanguage: "English",
    targetLanguage: "German",
    original: "Welcome to TransLingo.",
    translated: "Willkommen bei TransLingo.",
    words: 4,
    date: "2 minutes ago",
  },
  {
    id: 2,
    sourceLanguage: "German",
    targetLanguage: "English",
    original: "Wie geht es dir?",
    translated: "How are you?",
    words: 4,
    date: "1 hour ago",
  },
  {
    id: 3,
    sourceLanguage: "English",
    targetLanguage: "French",
    original: "Have a nice day!",
    translated: "Bonne journée !",
    words: 5,
    date: "Yesterday",
  },
  {
    id: 4,
    sourceLanguage: "Spanish",
    targetLanguage: "English",
    original: "¿Dónde está la estación?",
    translated: "Where is the station?",
    words: 5,
    date: "Yesterday",
  },
];

export default function HistoryPage() {
  const [translations, setTranslations] = useState(initialTranslations);

  const [search, setSearch] = useState("");

  const filteredTranslations = translations.filter((item) =>
    `${item.original} ${item.translated}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const deleteTranslation = (id: number) => {
    setTranslations((current) => current.filter((item) => item.id !== id));

    // Later:
    // DELETE /api/translations/{id}
  };

  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            History
          </p>

          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
            Translation history
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Review your previous translations.
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search translations..."
            className="w-full rounded-xl border border-indigo-100 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm shadow-indigo-50">
        {filteredTranslations.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <p className="font-medium text-gray-700">No translations found</p>

            <p className="mt-1 text-sm text-gray-400">
              Try a different search term.
            </p>
          </div>
        ) : (
          filteredTranslations.map((translation, index) => (
            <div
              key={translation.id}
              className={`p-6 ${
                index !== filteredTranslations.length - 1
                  ? "border-b border-indigo-50"
                  : ""
              }`}
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600">
                      {translation.sourceLanguage}
                    </span>

                    <ArrowRight size={13} className="text-gray-300" />

                    <span className="rounded-md bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600">
                      {translation.targetLanguage}
                    </span>
                  </div>

                  <p className="mt-4 text-sm font-medium text-gray-800">
                    {translation.original}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {translation.translated}
                  </p>

                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                    <span>{translation.words} words</span>

                    <span className="flex items-center gap-1">
                      <Clock3 size={13} />
                      {translation.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="rounded-lg border border-gray-100 p-2.5 text-gray-400 transition hover:bg-indigo-50 hover:text-indigo-600"
                    title="Copy"
                  >
                    <Copy size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={() => deleteTranslation(translation.id)}
                    className="rounded-lg border border-gray-100 p-2.5 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
