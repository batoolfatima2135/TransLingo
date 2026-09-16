"use client";

import {
  ArrowRight,
  Check,
  Copy,
  Languages,
  RotateCcw,
  Sparkles,
  Volume2,
} from "lucide-react";
import { useState } from "react";

export default function TranslatePage() {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = () => {
    if (!sourceText.trim()) return;

    // Temporary mock response.
    // Later this becomes:
    // POST /api/translations
    setTranslatedText(
      "Willkommen bei TransLingo. Dies ist eine Beispielübersetzung.",
    );
  };

  const handleClear = () => {
    setSourceText("");
    setTranslatedText("");
  };

  return (
    <div>
      <PageHeading
        eyebrow="Translate"
        title="Translate your text"
        description="Translate text quickly while keeping track of your monthly usage."
      />

      {/* Translator */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm shadow-indigo-50">
        {/* Language selector */}
        <div className="flex flex-col gap-4 border-b border-indigo-50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <LanguageSelect
              label="Source language"
              options={[
                "Auto-detect",
                "English",
                "German",
                "French",
                "Spanish",
              ]}
            />

            <ArrowRight size={18} className="mt-5 text-gray-300" />

            <LanguageSelect
              label="Target language"
              options={["German", "English", "French", "Spanish"]}
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Sparkles size={14} className="text-indigo-500" />
            Powered by DeepL
          </div>
        </div>

        <div className="grid md:grid-cols-2">
          {/* Source */}
          <div className="border-b border-indigo-50 p-6 md:border-b-0 md:border-r">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                English
              </span>

              <span className="text-xs text-gray-400">
                {sourceText.length} characters
              </span>
            </div>

            <textarea
              value={sourceText}
              onChange={(event) => setSourceText(event.target.value)}
              placeholder="Enter text to translate..."
              className="min-h-[300px] w-full resize-none bg-transparent text-lg leading-8 text-gray-800 outline-none placeholder:text-gray-300"
            />
          </div>

          {/* Result */}
          <div className="bg-indigo-50/30 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                German
              </span>

              {translatedText && (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="rounded-lg p-2 text-gray-400 transition hover:bg-white hover:text-indigo-600"
                    title="Copy translation"
                  >
                    <Copy size={16} />
                  </button>

                  <button
                    type="button"
                    className="rounded-lg p-2 text-gray-400 transition hover:bg-white hover:text-indigo-600"
                    title="Listen"
                  >
                    <Volume2 size={16} />
                  </button>
                </div>
              )}
            </div>

            {translatedText ? (
              <p className="min-h-[300px] text-lg leading-8 text-gray-800">
                {translatedText}
              </p>
            ) : (
              <div className="flex min-h-[300px] items-center justify-center text-center">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-indigo-500 shadow-sm">
                    <Languages size={22} />
                  </div>

                  <p className="mt-4 text-sm font-medium text-gray-500">
                    Your translation will appear here
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Enter some text and click Translate
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-4 border-t border-indigo-50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={handleClear}
            className="flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-800"
          >
            <RotateCcw size={15} />
            Clear
          </button>

          <button
            type="button"
            onClick={handleTranslate}
            disabled={!sourceText.trim()}
            className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Translate
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Usage reminder */}
      <div className="mt-5 flex items-center gap-2 text-xs text-gray-400">
        <Check size={14} className="text-indigo-500" />
        You have 3,716 words remaining this month.
      </div>
    </div>
  );
}

function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
        {eyebrow}
      </p>

      <h1 className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
        {title}
      </h1>

      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
}

function LanguageSelect({
  label,
  options,
}: {
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-1 block text-[11px] font-medium text-gray-400">
        {label}
      </label>

      <select className="rounded-lg border border-indigo-100 bg-white px-3 py-2 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
