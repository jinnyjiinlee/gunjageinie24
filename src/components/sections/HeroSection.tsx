import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import ScrollIndicator from './hero/ScrollIndicator';

interface HeroSectionProps {
  daysLeft: number;
}

export default function HeroSection({ daysLeft }: HeroSectionProps) {
  return (
    <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 relative overflow-hidden">
      <HeroBackground />
      <HeroContent daysLeft={daysLeft} />
      <ScrollIndicator />
    </section>
  );
}
