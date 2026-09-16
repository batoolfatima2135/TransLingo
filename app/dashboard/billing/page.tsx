"use client";

import {
  Check,
  CreditCard,
  Crown,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export default function BillingPage() {
  return (
    <div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
          Billing
        </p>

        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
          Subscription & billing
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Manage your TransLingo subscription and payment details.
        </p>
      </div>

      {/* Current subscription */}
      <section className="mt-8 rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm shadow-indigo-50">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Crown size={20} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Current plan</p>

              <h2 className="mt-1 text-xl font-semibold text-gray-900">Free</h2>

              <p className="mt-1 text-sm text-gray-500">
                5,000 words per month
              </p>
            </div>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Active
          </span>
        </div>

        <div className="mt-7 grid gap-5 border-t border-gray-100 pt-6 sm:grid-cols-3">
          <BillingDetail label="Payment provider" value="—" />

          <BillingDetail label="Billing cycle" value="Monthly" />

          <BillingDetail label="Next billing date" value="—" />
        </div>
      </section>

      {/* Upgrade */}
      <section className="mt-6 overflow-hidden rounded-2xl bg-indigo-600 p-8 text-white shadow-lg shadow-indigo-100">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-indigo-200">
              Upgrade your plan
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              More translations, more flexibility.
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-indigo-100">
              Upgrade to Pro for up to 100,000 words per month and keep
              translating without worrying about your quota.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
          >
            Upgrade to Pro
            <ExternalLink size={15} />
          </button>
        </div>

        <div className="mt-8 grid gap-3 border-t border-indigo-500 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "100,000 words/month",
            "Translation history",
            "Usage tracking",
            "Cancel anytime",
          ].map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-sm text-indigo-100"
            >
              <Check size={15} />
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* Payment information */}
      <section className="mt-6 rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm shadow-indigo-50">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-600">
            <CreditCard size={18} />
          </div>

          <div>
            <h2 className="font-semibold text-gray-900">Payment information</h2>

            <p className="mt-1 text-sm text-gray-500">
              Your payment details will appear here once you have an active Pro
              subscription.
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 rounded-xl bg-gray-50 px-4 py-3 text-xs text-gray-500">
          <ShieldCheck size={15} className="text-indigo-500" />
          Payments are securely processed by our payment providers.
        </div>
      </section>

      {/* Danger zone */}
      <section className="mt-8 rounded-2xl border border-red-100 bg-white p-6">
        <h2 className="font-semibold text-gray-900">Subscription actions</h2>

        <p className="mt-1 text-sm text-gray-500">
          Canceling your subscription will stop future recurring payments.
        </p>

        <button
          type="button"
          disabled
          className="mt-5 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-medium text-red-500 opacity-50"
        >
          Cancel subscription
        </button>
      </section>
    </div>
  );
}

function BillingDetail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-400">{label}</p>

      <p className="mt-1 text-sm font-medium text-gray-700">{value}</p>
    </div>
  );
}
