"use client";

import { ArrowRight, Languages, Sparkles } from "lucide-react";
import { useState } from "react";

export default function QuickTranslate() {
  const [text, setText] = useState("");

  return (
    <section className="mt-6 overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm shadow-indigo-50">
      <div className="border-b border-indigo-50 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <Languages size={18} />
          </div>

          <div>
            <h2 className="font-semibold text-gray-900">Translate something</h2>

            <p className="text-xs text-gray-500">
              Translate text using your available monthly quota.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        {/* Source */}
        <div className="border-b border-indigo-50 p-6 md:border-b-0 md:border-r">
          <div className="mb-4 flex items-center justify-between">
            <select className="rounded-lg border border-indigo-100 bg-white px-3 py-2 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100">
              <option>Auto-detect</option>
              <option>English</option>
              <option>German</option>
              <option>French</option>
              <option>Spanish</option>
            </select>

            <span className="text-xs text-gray-400">
              {text.length} characters
            </span>
          </div>

          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter text to translate..."
            className="min-h-[180px] w-full resize-none bg-transparent text-lg leading-8 text-gray-800 outline-none placeholder:text-gray-300"
          />
        </div>

        {/* Target */}
        <div className="bg-indigo-50/30 p-6">
          <div className="mb-4">
            <select className="rounded-lg border border-indigo-100 bg-white px-3 py-2 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100">
              <option>German</option>
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
          </div>

          <div className="min-h-[180px] text-lg leading-8 text-gray-400">
            Your translation will appear here...
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-indigo-50 px-6 py-4">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Sparkles size={14} className="text-indigo-500" />
          Powered by DeepL
        </div>

        <button
          type="button"
          disabled={!text.trim()}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Translate
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
