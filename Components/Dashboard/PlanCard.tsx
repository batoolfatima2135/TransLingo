import { Check, Crown } from "lucide-react";
import Link from "next/link";

export default function PlanCard() {
  return (
    <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm shadow-indigo-50">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <Crown size={19} />
        </div>

        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
          Free
        </span>
      </div>

      <p className="mt-6 text-sm text-gray-500">Current plan</p>

      <h2 className="mt-1 text-2xl font-semibold text-gray-900">Free</h2>

      <p className="mt-1 text-sm text-gray-500">5,000 words per month</p>

      <div className="mt-5 space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Check size={15} className="text-indigo-600" />
          Text translation
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Check size={15} className="text-indigo-600" />
          Translation history
        </div>
      </div>

      <Link
        href="/dashboard/billing"
        className="mt-6 block text-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
      >
        Upgrade to Pro
      </Link>
    </div>
  );
}
