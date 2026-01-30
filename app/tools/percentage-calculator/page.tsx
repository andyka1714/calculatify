"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowLeft,
  Calculator,
  BookOpen,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PercentageCalculatorPage() {
  const [mode, setMode] = useState<
    "find-percentage" | "find-base" | "find-rate"
  >("find-percentage");
  const [value1, setValue1] = useState<string>("");
  const [value2, setValue2] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);
  const [steps, setSteps] = useState<string[]>([]);

  const calculate = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Please enter valid numbers");
      setSteps([]);
      return;
    }

    let calculatedResult: number;
    let calculationSteps: string[] = [];

    switch (mode) {
      case "find-percentage":
        calculatedResult = (num1 / 100) * num2;
        calculationSteps = [
          `Step 1: Convert ${num1}% to a decimal: ${num1} ÷ 100 = ${(num1 / 100).toFixed(4)}`,
          `Step 2: Multiply by the base value: ${(num1 / 100).toFixed(4)} × ${num2} = ${calculatedResult.toFixed(2)}`,
          `Answer: ${num1}% of ${num2} is ${calculatedResult.toFixed(2)}`,
        ];
        break;
      case "find-base":
        calculatedResult = num1 / (num2 / 100);
        calculationSteps = [
          `Step 1: Convert ${num2}% to a decimal: ${num2} ÷ 100 = ${(num2 / 100).toFixed(4)}`,
          `Step 2: Divide the part by the decimal: ${num1} ÷ ${(num2 / 100).toFixed(4)} = ${calculatedResult.toFixed(2)}`,
          `Answer: ${num1} is ${num2}% of ${calculatedResult.toFixed(2)}`,
        ];
        break;
      case "find-rate":
        calculatedResult = (num1 / num2) * 100;
        calculationSteps = [
          `Step 1: Divide the part by the whole: ${num1} ÷ ${num2} = ${(num1 / num2).toFixed(4)}`,
          `Step 2: Multiply by 100: ${(num1 / num2).toFixed(4)} × 100 = ${calculatedResult.toFixed(2)}%`,
          `Answer: ${num1} is ${calculatedResult.toFixed(2)}% of ${num2}`,
        ];
        break;
    }

    setResult(calculatedResult.toFixed(2));
    setSteps(calculationSteps);
  };

  const clearCalculator = () => {
    setValue1("");
    setValue2("");
    setResult(null);
    setSteps([]);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/tools"
              className="mb-4 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Tools
            </Link>

            <div className="mb-4 flex items-center gap-2 text-sm text-indigo-600">
              <Calculator className="h-4 w-4" />
              <span className="font-medium">Calculator</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500">Math Tool</span>
            </div>

            <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Percentage Calculator
            </h1>

            <p className="text-lg text-slate-600">
              Calculate percentages instantly for discounts, taxes, grades, and
              more. Free online tool with step-by-step explanations.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Calculator */}
              <Card className="shadow-lg">
                <CardHeader className="bg-indigo-50">
                  <CardTitle className="flex items-center gap-2 text-indigo-900">
                    <Calculator className="h-5 w-5" />
                    Calculate Percentage
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {/* Mode Selection */}
                  <div className="mb-6 space-y-3">
                    <label className="block text-sm font-medium text-slate-700">
                      Select calculation type:
                    </label>
                    <div className="space-y-2">
                      <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 p-3 transition-colors hover:bg-slate-50">
                        <input
                          type="radio"
                          name="mode"
                          value="find-percentage"
                          checked={mode === "find-percentage"}
                          onChange={(e) =>
                            setMode(
                              e.target.value as
                                | "find-percentage"
                                | "find-base"
                                | "find-rate",
                            )
                          }
                          className="h-4 w-4 text-indigo-600"
                        />
                        <span className="text-sm text-slate-700">
                          What is X% of Y?
                        </span>
                      </label>
                      <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 p-3 transition-colors hover:bg-slate-50">
                        <input
                          type="radio"
                          name="mode"
                          value="find-base"
                          checked={mode === "find-base"}
                          onChange={(e) =>
                            setMode(
                              e.target.value as
                                | "find-percentage"
                                | "find-base"
                                | "find-rate",
                            )
                          }
                          className="h-4 w-4 text-indigo-600"
                        />
                        <span className="text-sm text-slate-700">
                          X is Y% of what number?
                        </span>
                      </label>
                      <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 p-3 transition-colors hover:bg-slate-50">
                        <input
                          type="radio"
                          name="mode"
                          value="find-rate"
                          checked={mode === "find-rate"}
                          onChange={(e) =>
                            setMode(
                              e.target.value as
                                | "find-percentage"
                                | "find-base"
                                | "find-rate",
                            )
                          }
                          className="h-4 w-4 text-indigo-600"
                        />
                        <span className="text-sm text-slate-700">
                          What percentage is X of Y?
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="mb-6 space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        {mode === "find-percentage" && "Percentage (%)"}
                        {mode === "find-base" && "Part (the value you have)"}
                        {mode === "find-rate" && "Part (X)"}
                      </label>
                      <Input
                        type="number"
                        value={value1}
                        onChange={(e) => setValue1(e.target.value)}
                        placeholder="Enter a number"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        {mode === "find-percentage" && "Base Value (the whole)"}
                        {mode === "find-base" && "Percentage (%)"}
                        {mode === "find-rate" && "Whole (Y)"}
                      </label>
                      <Input
                        type="number"
                        value={value2}
                        onChange={(e) => setValue2(e.target.value)}
                        placeholder="Enter a number"
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Button
                      onClick={calculate}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700"
                    >
                      Calculate
                    </Button>
                    <Button variant="outline" onClick={clearCalculator}>
                      Clear
                    </Button>
                  </div>

                  {/* Result */}
                  {result && (
                    <div className="mt-6 rounded-lg bg-emerald-50 p-4">
                      <div className="mb-2 text-sm font-medium text-emerald-800">
                        Result:
                      </div>
                      <div className="text-2xl font-bold text-emerald-900">
                        {mode === "find-rate" ? `${result}%` : result}
                      </div>
                    </div>
                  )}

                  {/* Steps */}
                  {steps.length > 0 && (
                    <div className="mt-4 rounded-lg bg-slate-50 p-4">
                      <div className="mb-2 text-sm font-medium text-slate-700">
                        Calculation Steps:
                      </div>
                      <ol className="space-y-2 text-sm text-slate-600">
                        {steps.map((step, index) => (
                          <li key={index} className="flex gap-2">
                            <span className="font-medium">{index + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Instructions */}
              <div className="space-y-6">
                <div className="rounded-lg bg-indigo-50 p-6">
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-indigo-900">
                    <BookOpen className="h-5 w-5" />
                    How to Use This Calculator
                  </h3>
                  <ol className="space-y-3 text-sm text-indigo-800">
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-200 font-semibold">
                        1
                      </span>
                      <span>
                        Select the type of percentage calculation you need from
                        the three options.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-200 font-semibold">
                        2
                      </span>
                      <span>
                        Enter the first number in the top input field.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-200 font-semibold">
                        3
                      </span>
                      <span>
                        Enter the second number in the bottom input field.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-200 font-semibold">
                        4
                      </span>
                      <span>
                        Click &quot;Calculate&quot; to see the result and
                        step-by-step explanation.
                      </span>
                    </li>
                  </ol>
                </div>

                <div className="rounded-lg border border-slate-200 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-slate-900">
                    Common Use Cases
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                      <span>
                        <strong>Shopping:</strong> Calculate discounts (20% off
                        $80)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                      <span>
                        <strong>Restaurants:</strong> Figure out tips (15% of
                        $60)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                      <span>
                        <strong>Taxes:</strong> Calculate sales tax (8% of $100)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-500" />
                      <span>
                        <strong>Grades:</strong> Convert scores (45/50 = what
                        %?)
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-amber-50 p-6">
                  <h3 className="mb-3 text-lg font-semibold text-amber-900">
                    The Formula Behind
                  </h3>
                  <p className="mb-3 text-sm text-amber-800">
                    This calculator uses the three fundamental percentage
                    formulas:
                  </p>
                  <ul className="space-y-2 text-sm text-amber-800">
                    <li>
                      • <strong>Find X% of Y:</strong> (X ÷ 100) × Y
                    </li>
                    <li>
                      • <strong>X is Y% of what:</strong> X ÷ (Y ÷ 100)
                    </li>
                    <li>
                      • <strong>What % is X of Y:</strong> (X ÷ Y) × 100
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Learn the Math Behind Percentages
            </h2>

            <div className="space-y-6 text-slate-600">
              <p className="leading-relaxed">
                Understanding how percentage calculations work is essential for
                everyday life. Whether you are calculating a discount at your
                favorite store, determining how much to tip at a restaurant, or
                analyzing data for work, percentages are everywhere.
              </p>

              <h3 className="text-xl font-semibold text-slate-900">
                Why Percentages Matter
              </h3>
              <p className="leading-relaxed">
                Percentages provide a standardized way to express parts of a
                whole. By converting everything to a base of 100, we can easily
                compare different quantities. For example, saying you scored 85%
                on a test immediately tells others that you got 85 out of 100
                points, regardless of the actual total number of questions.
              </p>

              <h3 className="text-xl font-semibold text-slate-900">
                Common Mistakes to Avoid
              </h3>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  Always convert percentages to decimals by dividing by 100
                  before calculating
                </li>
                <li>
                  Remember that percentage increases and decreases are not
                  symmetric (20% up then 20% down does not equal the original)
                </li>
                <li>
                  Double-check which value is the &quot;part&quot; and which is
                  the &quot;whole&quot; in your calculation
                </li>
              </ul>
            </div>

            {/* Link to Guide */}
            <div className="mt-8 rounded-xl bg-indigo-100 p-6">
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold text-indigo-900">
                    Want to Learn More?
                  </h3>
                  <p className="text-indigo-800">
                    Read our comprehensive guide to master percentage
                    calculations with detailed examples and formulas.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="border-indigo-300 bg-white text-indigo-700 hover:bg-indigo-50"
                  asChild
                >
                  <Link href="/guides/percentage-calculation">
                    Read Full Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="mb-2 font-semibold text-slate-900">
                  How do I calculate 20% of a number?
                </h3>
                <p className="text-slate-600">
                  Multiply the number by 0.20. For example, 20% of 50 = 50 ×
                  0.20 = 10. You can also divide the number by 5 (since 20% =
                  1/5).
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="mb-2 font-semibold text-slate-900">
                  Is this calculator free to use?
                </h3>
                <p className="text-slate-600">
                  Yes, our percentage calculator is completely free to use. No
                  registration required. We believe everyone should have access
                  to accurate calculation tools.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="mb-2 font-semibold text-slate-900">
                  Can I use this for business calculations?
                </h3>
                <p className="text-slate-600">
                  Absolutely! This calculator is suitable for personal,
                  educational, and business use. Use it for calculating profit
                  margins, tax amounts, discounts, and more.
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 p-5">
                <h3 className="mb-2 font-semibold text-slate-900">
                  How accurate is this calculator?
                </h3>
                <p className="text-slate-600">
                  Our calculator provides results accurate to 2 decimal places,
                  which is sufficient for most everyday calculations. For
                  financial or scientific calculations requiring higher
                  precision, consider using specialized software.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Calculators */}
        <section className="border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
              Related Calculators
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/tools/date-calculator"
                className="rounded-lg border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold text-slate-900">
                  Date Calculator
                </h3>
                <p className="text-sm text-slate-600">
                  Calculate the difference between any two dates
                </p>
              </Link>

              <Link
                href="/tools/age-calculator"
                className="rounded-lg border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold text-slate-900">
                  Age Calculator
                </h3>
                <p className="text-sm text-slate-600">
                  Calculate age down to the second
                </p>
              </Link>

              <Link
                href="/tools"
                className="rounded-lg border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold text-slate-900">
                  View All Tools
                </h3>
                <p className="text-sm text-slate-600">
                  Explore our complete collection
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
