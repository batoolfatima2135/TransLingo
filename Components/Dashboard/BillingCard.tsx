import { ArrowUpRight, CreditCard } from "lucide-react";
import Link from "next/link";

export default function BillingCard() {
  return (
    <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm shadow-indigo-50">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <CreditCard size={19} />
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
          Active
        </span>
      </div>

      <p className="mt-6 text-sm text-gray-500">Billing</p>

      <h2 className="mt-1 text-2xl font-semibold text-gray-900">Free plan</h2>

      <div className="mt-5 space-y-4">
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Payment provider</span>

          <span className="text-sm font-medium text-gray-700">—</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Next billing date</span>

          <span className="text-sm font-medium text-gray-700">—</span>
        </div>
      </div>

      <Link
        href="/dashboard/billing"
        className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-indigo-100 px-4 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
      >
        Manage billing
        <ArrowUpRight size={15} />
      </Link>
    </div>
  );
}
