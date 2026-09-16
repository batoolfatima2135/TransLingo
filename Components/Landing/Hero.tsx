import Link from "next/link";
import { ArrowRight, Check, Languages } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="absolute right-[-100px] top-[300px] h-[300px] w-[300px] rounded-full bg-violet-200/30 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-20 lg:grid-cols-2 lg:px-8 lg:pb-32 lg:pt-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-sm text-indigo-700">
            <Languages size={14} />
            Simple translation. Powerful results.
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-gray-900 sm:text-6xl lg:text-7xl">
            Translate
            <span className="block text-cyan-700">without the</span>
            complexity.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
            Translate text quickly and accurately with TransLingo. Track your
            usage, keep your translation history, and upgrade whenever you need
            more.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/register"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
            >
              Start translating
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>

            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl border border-indigo-100 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-indigo-200 hover:bg-indigo-50"
            >
              View pricing
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Check size={15} className="text-cyan-700" />
              5,000 free words
            </span>

            <span className="flex items-center gap-2">
              <Check size={15} className="text-cyan-700" />
              No credit card
            </span>
          </div>
        </div>

        <TranslationPreview />
      </div>
    </section>
  );
}

function TranslationPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-5 rounded-[2rem] bg-indigo-200/40 blur-2xl" />

      <div className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-white shadow-2xl shadow-indigo-100/60">
        <div className="flex items-center justify-between border-b border-indigo-50 px-5 py-4">
          <span className="text-sm font-medium text-gray-900">Translator</span>

          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Ready
          </span>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="border-b border-indigo-50 p-6 md:border-b-0 md:border-r">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
                English
              </span>

              <span className="text-xs text-gray-400">Auto-detected</span>
            </div>

            <p className="min-h-[150px] text-xl leading-8 text-gray-800">
              Welcome to TransLingo. Translate your text quickly and easily.
            </p>

            <div className="mt-5 text-right text-xs text-gray-400">
              72 characters
            </div>
          </div>

          <div className="bg-indigo-50/40 p-6">
            <div className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
                German
              </span>
            </div>

            <p className="min-h-[150px] text-xl leading-8 text-gray-800">
              Willkommen bei TransLingo. Übersetzen Sie Ihre Texte schnell und
              einfach.
            </p>

            <div className="mt-5 flex justify-end">
              <button className="rounded-lg border border-indigo-100 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm">
                Copy translation
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-indigo-50 px-5 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">Powered by DeepL</span>

            <button className="rounded-lg bg-cyan-700 px-4 py-2 text-xs font-semibold text-white">
              Translate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
