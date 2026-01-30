import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FileText, Shield, Clock, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Calculatify",
  description:
    "Read Calculatify's Terms of Service. By using our website and calculators, you agree to these terms and conditions.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "calculatify terms",
  ],
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                <FileText className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-slate-600">
              Please read these terms carefully before using our website and
              services.
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Last Updated */}
            <div className="mb-8 text-center">
              <p className="text-sm text-slate-500">
                Last Updated: January 30, 2026
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Welcome to Calculatify. By accessing or using our website,
                calculators, and educational content (collectively, the
                &quot;Services&quot;), you agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not use
                our Services.
              </p>
            </div>

            {/* Description of Services */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                2. Description of Services
              </h2>
              <p className="mb-4 text-slate-600 leading-relaxed">
                Calculatify provides free online calculators and educational
                guides to help users understand and perform mathematical
                calculations. Our Services include:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-slate-600">
                <li>
                  Online calculation tools (percentage calculator, date
                  calculator, etc.)
                </li>
                <li>Educational guides and tutorials</li>
                <li>Mathematical formulas and explanations</li>
                <li>Reference materials and examples</li>
              </ul>
              <p className="mt-4 text-slate-600 leading-relaxed">
                All calculations are performed locally in your browser. We do
                not store, process, or have access to any data you input into
                our calculators.
              </p>
            </div>

            {/* User Conduct */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                3. User Conduct
              </h2>
              <p className="mb-4 text-slate-600 leading-relaxed">
                When using our Services, you agree to:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-slate-600">
                <li>Use the Services for lawful purposes only</li>
                <li>
                  Not attempt to disrupt, damage, or gain unauthorized access to
                  our systems
                </li>
                <li>
                  Not use automated means (bots, scrapers) to access our
                  Services without permission
                </li>
                <li>
                  Not copy, modify, or redistribute our content without
                  attribution
                </li>
                <li>
                  Not use our calculators for illegal financial or fraudulent
                  activities
                </li>
              </ul>
            </div>

            {/* Accuracy of Information */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                4. Accuracy and Reliability
              </h2>
              <div className="rounded-lg bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 flex-shrink-0 text-amber-600" />
                  <div>
                    <h3 className="mb-2 font-semibold text-amber-900">
                      Important Disclaimer
                    </h3>
                    <p className="text-amber-800">
                      While we strive to provide accurate calculators and
                      educational content, we make no warranties about the
                      accuracy, reliability, or completeness of any calculations
                      or information provided. Our calculators are designed for
                      general educational and everyday use, not for critical
                      financial, medical, or legal decisions.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-slate-600 leading-relaxed">
                You acknowledge that:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-2 text-slate-600">
                <li>
                  All calculations should be verified independently for
                  important decisions
                </li>
                <li>
                  We are not responsible for any errors, omissions, or results
                  from using our tools
                </li>
                <li>
                  Financial, tax, or legal calculations should be confirmed with
                  qualified professionals
                </li>
                <li>
                  We do not guarantee uninterrupted access to our Services
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                5. Intellectual Property
              </h2>
              <p className="mb-4 text-slate-600 leading-relaxed">
                All content on Calculatify, including but not limited to:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-slate-600">
                <li>Text, articles, and educational content</li>
                <li>Calculators and their underlying code</li>
                <li>Graphics, logos, and design elements</li>
                <li>Organization and presentation of information</li>
              </ul>
              <p className="mt-4 text-slate-600 leading-relaxed">
                is the property of Calculatify and is protected by copyright and
                other intellectual property laws. You may use our content for
                personal, non-commercial purposes. Educational institutions may
                use our content with proper attribution.
              </p>
            </div>

            {/* Privacy */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                6. Privacy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Your privacy is important to us. Please review our{" "}
                <a href="/privacy" className="text-indigo-600 hover:underline">
                  Privacy Policy
                </a>{" "}
                to understand how we handle your information. By using our
                Services, you agree to the collection and use of information in
                accordance with our Privacy Policy.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                7. Limitation of Liability
              </h2>
              <p className="text-slate-600 leading-relaxed">
                To the maximum extent permitted by applicable law, Calculatify
                and its operators shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages,
                including but not limited to:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-2 text-slate-600">
                <li>Loss of profits, data, or goodwill</li>
                <li>Service interruptions or website unavailability</li>
                <li>Errors or inaccuracies in calculations</li>
                <li>Personal injury or property damage</li>
                <li>Any other damages arising from your use of our Services</li>
              </ul>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                8. Changes to Terms
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to modify these Terms of Service at any
                time. Changes will be effective immediately upon posting to this
                page. We will notify users of significant changes by updating
                the &quot;Last Updated&quot; date. Your continued use of the
                Services after changes constitutes acceptance of the new terms.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                9. Governing Law
              </h2>
              <p className="text-slate-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of the United States, without regard to its
                conflict of law provisions. Any dispute arising under these
                Terms shall be subject to the exclusive jurisdiction of the
                courts located within the United States.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-2xl bg-indigo-50 p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h2 className="mb-2 text-2xl font-bold text-indigo-900">
                    10. Contact Us
                  </h2>
                  <p className="mb-4 text-indigo-800 leading-relaxed">
                    If you have any questions about these Terms of Service,
                    please contact us:
                  </p>
                  <a
                    href="mailto:legal@calculatify.com"
                    className="inline-flex items-center gap-2 font-semibold text-indigo-700 hover:text-indigo-800"
                  >
                    legal@calculatify.com
                  </a>
                  <p className="mt-4 text-sm text-indigo-700">
                    We typically respond to inquiries within 48 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Agreement Reminder */}
            <div className="mt-12 text-center">
              <div className="flex items-center justify-center gap-2 text-slate-500">
                <Clock className="h-4 w-4" />
                <span className="text-sm">
                  By using Calculatify, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms of Service.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
