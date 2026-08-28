import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock3,
  Globe2,
  Languages,
  Sparkles,
  Zap,
} from "lucide-react";
import Navbar from "@/Components/Landing/Navbar";
import Hero from "@/Components/Landing/Hero";
import Stats from "@/Components/Landing/Stats";
import Features from "@/Components/Landing/Features";
import Pricing from "@/Components/Landing/Pricing";
import HowItWorks from "@/Components/Landing/HowItWorks";
import CTA from "@/Components/Landing/CTA";
import Footer from "@/Components/Landing/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-[#171717]">
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
    </main>
  );
}
