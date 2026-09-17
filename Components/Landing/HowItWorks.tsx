const steps = [
  {
    number: "01",
    title: "Create your account",
    description:
      "Sign up for a free TransLingo account and get started with 5,000 words every month.",
  },
  {
    number: "02",
    title: "Enter your text",
    description:
      "Choose your target language and enter the text you want to translate.",
  },
  {
    number: "03",
    title: "Get your translation",
    description:
      "TransLingo sends your request to DeepL and displays the translated result.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#111827] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">
            How it works
          </p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            Translation in three simple steps.
          </h2>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-sm font-semibold text-cyan-700">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>

              <p className="mt-3 leading-7 text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
