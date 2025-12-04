import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { FeaturedWork } from "@/components/featured-work";
import { UIShots } from "@/components/ui-shots";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="px-4 md:px-4">
      <Navigation variant="home" />
      <HeroSection />
      <FeaturedWork />
      <UIShots />
      <ContactSection />
    </div>
  );
}
