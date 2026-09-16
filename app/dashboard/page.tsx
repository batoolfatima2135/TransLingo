import DashboardHeader from "@/Components/Dashboard/DashboardHeader";
import PlanCard from "@/Components/Dashboard/PlanCard";
import UsageCard from "@/Components/Dashboard/UsageCard";
import BillingCard from "@/Components/Dashboard/BillingCard";
import QuickTranslate from "@/Components/Dashboard/QuickTranslate";
import RecentTranslations from "@/Components/Dashboard/RecentTranslations";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader />

      <div className="grid gap-6 lg:grid-cols-3">
        <PlanCard />
        <UsageCard />
        <BillingCard />
      </div>

      <QuickTranslate />

      <RecentTranslations />
    </>
  );
}
