import dynamic from "next/dynamic";

const AppBar = dynamic(() => import("./component/AppBar"));
const HeroSection = dynamic(() => import("./component/homepage/HeroSection"));
const OurBeliefSection = dynamic(
  () => import("./component/homepage/OurBeliefSection")
);
const OurServicesSection = dynamic(
  () => import("./component/homepage/OurServicesSection")
);
const CombinedSection = dynamic(
  () => import("./component/homepage/CombinedSection")
);
const VisitContactSection = dynamic(
  () => import("./component/homepage/VisitContactSection")
);
const ModernFeatureSection = dynamic(
  () => import("./component/homepage/ModernFeatureSection")
);

export default function HomePage() {
  return (
    <>
      <AppBar />
      <main className="main-wrapper">
        <HeroSection />
        <OurBeliefSection />
        <ModernFeatureSection />
        <div>{<OurServicesSection />}</div>
        <section>
          <CombinedSection />
        </section>
        <VisitContactSection />
      </main>
    </>
  );
}
