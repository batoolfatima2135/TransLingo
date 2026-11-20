import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import GoogleSignInButton from "@/Components/Login/googleSignInButton";
import { authOptions } from "@/lib/auth";
import CredentialsLoginForm from "@/Components/Login/credentialsLoginForm";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <div className="mb-8 mt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
            Your words, understood
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Sign in to start translating.
          </h1>
        </div>
        <GoogleSignInButton />
        <CredentialsLoginForm />

        <p className="mt-6 text-center text-xs text-gray-400">
          By signing in, you agree to our{" "}
          <a href="/terms" className="underline hover:text-gray-600">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline hover:text-gray-600">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
