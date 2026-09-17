import { BarChart3 } from "lucide-react";

const wordsUsed = 1284;
const quota = 5000;
const remaining = quota - wordsUsed;
const percentage = Math.round((wordsUsed / quota) * 100);

export default function UsageCard() {
  return (
    <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm shadow-indigo-50">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
          <BarChart3 size={19} />
        </div>

        <span className="text-xs font-medium text-gray-400">This month</span>
      </div>

      <p className="mt-6 text-sm text-gray-500">Translation usage</p>

      <div className="mt-2 flex items-end justify-between">
        <p className="text-2xl font-semibold text-gray-900">
          {wordsUsed.toLocaleString()}
        </p>

        <p className="pb-1 text-sm text-gray-400">/ {quota.toLocaleString()}</p>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-indigo-50">
        <div
          className="h-full rounded-full bg-indigo-600 transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-3 flex justify-between text-xs">
        <span className="text-indigo-600">{percentage}% used</span>

        <span className="text-gray-400">
          {remaining.toLocaleString()} remaining
        </span>
      </div>

      <div className="mt-6 border-t border-gray-100 pt-4">
        <p className="text-xs text-gray-400">Billing cycle ends</p>

        <p className="mt-1 text-sm font-medium text-gray-700">
          September 30, 2026
        </p>
      </div>
    </div>
  );
}
