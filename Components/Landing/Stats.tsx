const stats = [
  {
    value: "5K",
    label: "Free words / month",
  },
  {
    value: "100K",
    label: "Pro words / month",
  },
  {
    value: "24/7",
    label: "Access your history",
  },
  {
    value: "2",
    label: "Payment providers",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-indigo-100/70 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-indigo-100/70 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="px-6 py-8 text-center">
            <p className="text-2xl font-semibold text-cyan-700">{stat.value}</p>

            <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
