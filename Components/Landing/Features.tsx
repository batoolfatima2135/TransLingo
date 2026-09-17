import { Clock3, Globe2, Zap } from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Fast translation",
    description:
      "Enter your text, choose your languages, and get your translation through the DeepL API.",
  },
  {
    icon: Zap,
    title: "Usage tracking",
    description:
      "See exactly how many words you've used, how much remains, and when your billing cycle ends.",
  },
  {
    icon: Clock3,
    title: "Translation history",
    description:
      "Your successful translations are saved so you can review or delete them whenever you need.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
          Features
        </p>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900">
          Everything you need to translate.
        </h2>

        <p className="mt-4 text-lg leading-8 text-gray-600">
          TransLingo keeps translation simple while giving you the tools to
          manage your usage and translations.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-2xl border border-indigo-100 bg-white p-7 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-cyan-700">
                <Icon size={22} />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
