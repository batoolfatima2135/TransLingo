import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    title: "Free",
    description: "For occasional translation.",
    price: "€0",
    period: "/ month",
    features: [
      "5,000 words per month",
      "Text translation",
      "Automatic source detection",
      "Translation history",
      "Usage dashboard",
    ],
    button: "Get started",
    highlighted: false,
  },
  {
    title: "Pro",
    description: "For frequent translation.",
    price: "€—",
    period: "/ month",
    features: [
      "100,000 words per month",
      "Everything in Free",
      "Higher translation quota",
      "Subscription management",
      "Monthly usage reset",
    ],
    button: "Choose Pro",
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
          Pricing
        </p>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">
          Start free. Upgrade when you need more.
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Choose the plan that fits your translation needs.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <PricingCard key={plan.title} {...plan} />
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-gray-400">
        Pro pricing is not specified in the current SRS and can be added once
        the final pricing has been decided.
      </p>
    </section>
  );
}

function PricingCard({
  title,
  description,
  price,
  period,
  features,
  button,
  highlighted,
}: (typeof plans)[number]) {
  return (
    <div
      className={`relative rounded-3xl border p-8 ${
        highlighted
          ? "border-indigo-600 bg-cyan-700 text-white shadow-xl shadow-indigo-200"
          : "border-indigo-100 bg-white"
      }`}
    >
      {highlighted && (
        <span className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-semibold text-cyan-700">
          Popular
        </span>
      )}

      <h3 className="text-xl font-semibold">{title}</h3>

      <p
        className={`mt-2 text-sm ${
          highlighted ? "text-indigo-100" : "text-gray-500"
        }`}
      >
        {description}
      </p>

      <div className="mt-7 flex items-baseline gap-1">
        <span className="text-4xl font-semibold">{price}</span>

        <span
          className={`text-sm ${
            highlighted ? "text-indigo-100" : "text-gray-500"
          }`}
        >
          {period}
        </span>
      </div>

      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check size={17} className="mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/register"
        className={`mt-8 flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition ${
          highlighted
            ? "bg-white text-cyan-700 hover:bg-indigo-50"
            : "bg-cyan-700 text-white hover:bg-indigo-700"
        }`}
      >
        {button}
      </Link>
    </div>
  );
}
