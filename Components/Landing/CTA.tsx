import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-6 pb-24 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-indigo-50 px-6 py-16 text-center sm:px-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
          Get started
        </p>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">
          Ready to translate?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Create your free account and start translating with TransLingo.
        </p>

        <Link
          href="/register"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
        >
          Get started
          <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}
