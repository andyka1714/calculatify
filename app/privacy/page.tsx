import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Calculatify",
  description: "Learn how Calculatify protects your privacy. We do not track, store, or share your personal data or calculations.",
  keywords: ["privacy policy", "data protection", "privacy", "calculatify privacy"],
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-slate-600">
              Your privacy is our priority. Learn how we protect your data.
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            
            {/* Last Updated */}
            <div className="mb-8 text-center">
              <p className="text-sm text-slate-500">Last Updated: January 30, 2026</p>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Introduction</h2>
              <p className="text-slate-600 leading-relaxed">
                At Calculatify, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, and protect your information when you use our website and services. We are committed 
                to maintaining the trust and confidence of all our visitors.
              </p>
            </div>

            {/* Key Points */}
            <div className="mb-12 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <Lock className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">No Data Storage</h3>
                <p className="text-sm text-slate-600">
                  We do not store any of your calculations or personal information on our servers. 
                  Everything happens in your browser.
                </p>
              </div>
              
              <div className="rounded-xl border border-slate-200 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <Eye className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">No Tracking</h3>
                <p className="text-sm text-slate-600">
                  We do not use cookies for tracking or advertising purposes. Your browsing activity 
                  is not monitored.
                </p>
              </div>
              
              <div className="rounded-xl border border-slate-200 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <FileText className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Transparent</h3>
                <p className="text-sm text-slate-600">
                  We clearly explain what limited information we collect and how it is used. 
                  No hidden practices.
                </p>
              </div>
              
              <div className="rounded-xl border border-slate-200 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Secure</h3>
                <p className="text-sm text-slate-600">
                  Our website uses HTTPS encryption to ensure your connection is secure and protected.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Information We Collect</h2>
              <div className="space-y-4 text-slate-600">
                <p className="leading-relaxed">
                  <strong>We collect minimal information:</strong>
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Usage Analytics:</strong> We use basic analytics to understand how visitors 
                    interact with our website. This includes anonymous data like page views and time spent 
                    on site. No personally identifiable information is collected.
                  </li>
                  <li>
                    <strong>Contact Form:</strong> When you contact us via email, we receive the information 
                    you voluntarily provide (name, email, message). This information is used solely to 
                    respond to your inquiry.
                  </li>
                </ul>
                <p className="leading-relaxed">
                  <strong>We do NOT collect:</strong>
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Your calculation inputs or results</li>
                  <li>Personal identification information</li>
                  <li>Browsing history or search queries</li>
                  <li>Location data</li>
                  <li>Device information beyond basic browser type</li>
                </ul>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">How We Use Information</h2>
              <div className="space-y-4 text-slate-600">
                <p className="leading-relaxed">
                  The limited information we collect is used for:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Improving website functionality and user experience</li>
                  <li>Responding to user inquiries and feedback</li>
                  <li>Fixing bugs and technical issues</li>
                  <li>Understanding which calculators and guides are most helpful</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Cookies</h2>
              <div className="space-y-4 text-slate-600">
                <p className="leading-relaxed">
                  Calculatify uses minimal cookies:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> These are necessary for the website to function 
                    properly. They do not track you or collect personal data.
                  </li>
                  <li>
                    <strong>No Marketing Cookies:</strong> We do not use cookies for advertising, 
                    marketing, or third-party tracking.
                  </li>
                </ul>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Third-Party Services</h2>
              <div className="space-y-4 text-slate-600">
                <p className="leading-relaxed">
                  We may use the following third-party services:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Hosting Provider:</strong> Our website is hosted on secure servers. 
                    They have access to server logs but do not have access to your calculation data.
                  </li>
                  <li>
                    <strong>Analytics:</strong> We use privacy-focused analytics that do not track 
                    individual users or store personal information.
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Data Security</h2>
              <div className="space-y-4 text-slate-600">
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect any 
                  information we collect:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>HTTPS encryption for all data transmission</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Limited data collection to minimize risk</li>
                  <li>No storage of sensitive calculation data</li>
                </ul>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Children&apos;s Privacy</h2>
              <p className="text-slate-600 leading-relaxed">
                Calculatify is designed to be a safe educational resource for users of all ages, 
                including children. We do not knowingly collect personal information from children 
                under 13. If you believe we have inadvertently collected such information, 
                please contact us immediately.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Changes to This Policy</h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. Any changes will be posted on 
                this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Us */}
            <div className="rounded-2xl bg-indigo-50 p-8">
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">Contact Us</h2>
              <p className="mb-4 text-indigo-800 leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, 
                please contact us at:
              </p>
              <a 
                href="mailto:privacy@calculatify.com"
                className="inline-flex items-center gap-2 font-semibold text-indigo-700 hover:text-indigo-800"
              >
                privacy@calculatify.com
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
