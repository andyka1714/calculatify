import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, Target, Users, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Calculatify",
  description: "Learn about Calculatify's mission to provide free educational resources and accurate calculation tools for everyone.",
  keywords: ["about calculatify", "calculatify mission", "free calculators", "educational resources"],
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              About Calculatify
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-slate-600">
              Empowering everyone with free educational resources and accurate calculation tools.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            
            {/* Our Story */}
            <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-slate-900">Our Story</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Calculatify was born from a simple observation: while the internet is full of calculators, 
                  most lack the educational context that helps people truly understand the math behind the numbers. 
                  We believe that understanding how calculations work is just as important as getting the right answer.
                </p>
                <p>
                  Founded in 2026, our mission is to bridge the gap between practical tools and educational content. 
                  Every calculator on our platform is accompanied by comprehensive guides that explain the underlying 
                  principles, formulas, and real-world applications.
                </p>
                <p>
                  Whether you are a student struggling with percentage calculations, a professional needing quick 
                  computations, or simply someone who wants to understand the math behind everyday decisions, 
                  Calculatify is here to help.
                </p>
              </div>
            </div>

            {/* Mission & Values */}
            <div className="mb-12">
              <h2 className="mb-8 text-3xl font-bold text-slate-900">Our Mission & Values</h2>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                    <BookOpen className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">Education First</h3>
                  <p className="text-slate-600">
                    We believe in teaching, not just calculating. Every tool comes with detailed explanations 
                    to help you learn and understand the underlying concepts.
                  </p>
                </div>
                
                <div className="rounded-xl border border-slate-200 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                    <Target className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">Accuracy Matters</h3>
                  <p className="text-slate-600">
                    We ensure all our calculators provide precise results. Our tools are tested and 
                    verified to give you confidence in every calculation.
                  </p>
                </div>
                
                <div className="rounded-xl border border-slate-200 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">Accessible to All</h3>
                  <p className="text-slate-600">
                    All our resources are completely free. No registration, no hidden fees, no premium tiers. 
                    Knowledge should be accessible to everyone.
                  </p>
                </div>
                
                <div className="rounded-xl border border-slate-200 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                    <Heart className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-900">Privacy Focused</h3>
                  <p className="text-slate-600">
                    We respect your privacy. No data tracking, no cookies for advertising, no selling information. 
                    Your calculations stay on your device.
                  </p>
                </div>
              </div>
            </div>

            {/* What We Offer */}
            <div className="mb-12">
              <h2 className="mb-6 text-3xl font-bold text-slate-900">What We Offer</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">Comprehensive Learning Guides</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our in-depth guides cover everything from basic percentage calculations to complex date mathematics. 
                    Each guide is written to be accessible yet thorough, with real-world examples and practical applications. 
                    We break down complex concepts into easy-to-understand steps.
                  </p>
                </div>
                
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">Free Online Calculators</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our calculators are designed for accuracy and ease of use. From percentage calculators to date tools, 
                    each one includes step-by-step explanations so you can see exactly how the result was calculated. 
                    Perfect for students, professionals, and everyday use.
                  </p>
                </div>
                
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">Always Improving</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We continuously expand our library of guides and tools based on user feedback and emerging needs. 
                    Our goal is to become the most comprehensive resource for practical mathematics education on the web.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Commitment */}
            <div className="rounded-2xl bg-indigo-50 p-8">
              <h2 className="mb-4 text-2xl font-bold text-indigo-900">Our Commitment</h2>
              <p className="mb-6 text-indigo-800 leading-relaxed">
                At Calculatify, we are committed to maintaining the highest standards of accuracy, accessibility, and 
                educational value. We regularly review and update our content to ensure it remains relevant and correct. 
                Our calculators are tested thoroughly, and our guides are written with clarity and precision.
              </p>
              <p className="text-indigo-800 leading-relaxed">
                We believe that when people understand the math behind everyday calculations, they make better decisions 
                and feel more confident in their daily lives. That is the impact we strive to create.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <h2 className="mb-4 text-2xl font-bold text-slate-900">Get in Touch</h2>
              <p className="mb-6 text-slate-600">
                Have questions, suggestions, or feedback? We would love to hear from you.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white transition-all hover:bg-indigo-700 hover:shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
