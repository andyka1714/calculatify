import Link from "next/link";
import { Calculator, ArrowLeft, Home, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      {/* Simple Header */}
      <header className="border-b border-slate-200 bg-white px-4 py-4">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">Calculatify</span>
          </Link>
        </div>
      </header>

      {/* 404 Content */}
      <main className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          {/* Construction Icon */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-100">
              <Construction className="h-12 w-12 text-amber-600" />
            </div>
          </div>

          {/* 404 Code */}
          <h1 className="mb-4 text-8xl font-bold text-indigo-600">404</h1>

          {/* Main Message */}
          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            Page Under Construction
          </h2>

          <p className="mb-8 text-lg text-slate-600">
            We are working hard to bring you more helpful calculators and guides. 
            This page will be available soon!
          </p>

          {/* Suggestions */}
          <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              While you wait, check out:
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link 
                href="/guides/percentage-calculation"
                className="rounded-lg border border-slate-200 p-4 text-left transition-colors hover:border-indigo-300 hover:bg-indigo-50"
              >
                <div className="mb-2 text-2xl">📊</div>
                <div className="font-semibold text-slate-900">Percentage Guide</div>
                <div className="text-sm text-slate-600">Learn percentage calculations</div>
              </Link>
              
              <Link 
                href="/tools/percentage-calculator"
                className="rounded-lg border border-slate-200 p-4 text-left transition-colors hover:border-indigo-300 hover:bg-indigo-50"
              >
                <div className="mb-2 text-2xl">🔢</div>
                <div className="font-semibold text-slate-900">Percentage Calculator</div>
                <div className="text-sm text-slate-600">Calculate percentages instantly</div>
              </Link>
              
              <Link 
                href="/tools/date-calculator"
                className="rounded-lg border border-slate-200 p-4 text-left transition-colors hover:border-indigo-300 hover:bg-indigo-50"
              >
                <div className="mb-2 text-2xl">📅</div>
                <div className="font-semibold text-slate-900">Date Calculator</div>
                <div className="text-sm text-slate-600">Calculate date differences</div>
              </Link>
              
              <Link 
                href="/about"
                className="rounded-lg border border-slate-200 p-4 text-left transition-colors hover:border-indigo-300 hover:bg-indigo-50"
              >
                <div className="mb-2 text-2xl">ℹ️</div>
                <div className="font-semibold text-slate-900">About Us</div>
                <div className="text-sm text-slate-600">Learn about Calculatify</div>
              </Link>
            </div>
          </div>

          {/* Back Button */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button 
              variant="outline" 
              className="border-slate-300"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
            
            <Button 
              className="bg-indigo-600 hover:bg-indigo-700"
              asChild
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Contact */}
          <p className="mt-8 text-sm text-slate-500">
            Think this is a mistake?{" "}
            <Link href="/contact" className="text-indigo-600 hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-slate-200 bg-white px-4 py-6">
        <div className="mx-auto max-w-7xl text-center text-sm text-slate-500">
          © 2026 Calculatify. Educational resources for everyone.
        </div>
      </footer>
    </div>
  );
}
