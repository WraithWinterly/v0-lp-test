import Link from "next/link";
import CTASection from "~/components/cta-section";
import { DetailedFooterComponent } from "~/components/detailed-footer";
import { HeaderComponent } from "~/components/header";
import { HeroPageComponent } from "~/components/hero-page";
import { LandingPageComponent } from "~/components/landing-page";
import { ModernFeaturesGridComponent } from "~/components/modern-features-grid";
import { ModernHeader } from "~/components/modern-header";
import { ModernTestimonialsGridComponent } from "~/components/modern-testimonials-grid";
import { VariedBentoGridComponent } from "~/components/varied-bento-grid";

export default function HomePage() {
  return (
    <main>
      <ModernHeader />
      <HeroPageComponent />
      <VariedBentoGridComponent />
      <ModernFeaturesGridComponent />
      <ModernTestimonialsGridComponent />
      <CTASection />
      <DetailedFooterComponent />
    </main>
  );
}
