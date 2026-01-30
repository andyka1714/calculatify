import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedGuides } from "@/components/sections/FeaturedGuides";
import { EssentialTools } from "@/components/sections/EssentialTools";

/**
 * Home Page Component
 * Content-First Architecture: 70% Content / 30% Tools
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section - 15% Layout */}
        <HeroSection />

        {/* Featured Guides - 45% Layout (Core Section) */}
        <FeaturedGuides />

        {/* Tools Showcase - 25% Layout */}
        <EssentialTools />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
