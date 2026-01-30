import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us | Calculatify",
  description: "Get in touch with the Calculatify team. We are here to help with any questions, feedback, or suggestions.",
  keywords: ["contact calculatify", "support", "help", "feedback"],
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-slate-600">
              Have a question, suggestion, or feedback? We would love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2">
              
              {/* Contact Form */}
              <Card className="shadow-lg">
                <CardHeader className="bg-indigo-50">
                  <CardTitle className="flex items-center gap-2 text-indigo-900">
                    <MessageSquare className="h-5 w-5" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form className="space-y-4" action="mailto:hello@calculatify.com" method="post" encType="text/plain">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What is this about?"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="rounded-lg bg-indigo-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-indigo-900">Why Contact Us?</h3>
                  <ul className="space-y-3 text-indigo-800">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
                      <span>Report bugs or technical issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
                      <span>Suggest new calculator tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
                      <span>Request educational content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
                      <span>Provide feedback on our guides</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-indigo-600" />
                      <span>Partnership inquiries</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-slate-200 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-slate-900">Direct Email</h3>
                  <p className="mb-4 text-slate-600">
                    Prefer to email us directly? You can reach us at:
                  </p>
                  <a 
                    href="mailto:hello@calculatify.com"
                    className="flex items-center gap-3 rounded-lg bg-slate-50 p-4 transition-colors hover:bg-slate-100"
                  >
                    <Mail className="h-5 w-5 text-indigo-600" />
                    <span className="font-medium text-slate-900">hello@calculatify.com</span>
                  </a>
                </div>

                <div className="rounded-lg bg-amber-50 p-6">
                  <h3 className="mb-3 text-lg font-semibold text-amber-900">Response Time</h3>
                  <p className="text-amber-800">
                    We typically respond to all inquiries within 24-48 hours. For technical issues, 
                    we aim to resolve them as quickly as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
