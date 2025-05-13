import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import { SetStateAction, useRef, useState } from "react";

export default function ServicesOverviewCards() {
  const [activeTab, setActiveTab] = useState("services");
  const sectionRef = useRef(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Render icons based on the type
  const renderIcon = (iconName: string, size = 6) => {
    switch (iconName) {
      case "leaf":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-${size} h-${size}`}
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        );
      case "chart":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-${size} h-${size}`}
          >
            <path d="M3 3v18h18" />
            <path d="m18 3-3 7-4-3-5 5-3-2" />
          </svg>
        );
      case "compass":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-${size} h-${size}`}
          >
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
        );
      case "settings":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-${size} h-${size}`}
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
      case "bolt":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-${size} h-${size}`}
          >
            <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        );
      case "shield":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-${size} h-${size}`}
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        );
      case "users":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-${size} h-${size}`}
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case "arrow-left":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`w-${size} h-${size}`}
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Custom AnimatedSection component for scroll animations
  const AnimatedSection = ({
    children = null as React.ReactNode,
    delay = 0,
    className = "",
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.6, delay: delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  // Custom AnimatedItem component for staggered animations
  const AnimatedItem = ({
    children = null as React.ReactNode,
    delay = 0,
    index = 0,
    className = "",
    staggerDelay = 0.1,
    layoutId = "",
  }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
      <motion.div
        ref={ref}
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
        transition={{ duration: 0.5, delay: delay + index * staggerDelay }}
        className={className}
        layoutId={layoutId}
      >
        {children}
      </motion.div>
    );
  };

  // Handler for expanding a service card
  const handleExpand = (serviceId: SetStateAction<string | null>) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setExpandedService(serviceId);

    // Reset animating state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const services = [
    {
      id: "ai-automation",
      title: "AI Automation Systems",
      desc: "Custom workflows that save time and scale impact",
      icon: "settings",
      color: "bg-emerald-400",
      darkColor: "bg-emerald-500",
      iconHoverColor: "group-hover:bg-emerald-500",
      shadowColor: "emerald",
      glowColor: "rgba(16, 185, 129, 0.6)",
      detailedContent: {
        headline: "Custom workflows that save time and scale impact",
        paragraphs: [
          "Our foundational automations cover everything from CRM and lead generation to email workflows, giving you the strategy and automation backbone needed to show up with confidence—without burning out.",
          "Our full AI automation suite creates sophisticated client onboarding, scheduling, and follow-up systems that work while you sleep, allowing your work to start compounding.",
          "For visionaries and thought leaders, we build high-converting AI-enhanced systems across departments (sales, operations, marketing) that truly scale your impact.",
        ],
        stats: [
          { value: "85%", label: "reduction in administrative tasks" },
          { value: "3×", label: "faster client onboarding" },
          { value: "24/7", label: "systems working while you rest" },
        ],
        testimonial: {
          quote:
            "BetterMorals automation systems transformed our business. What used to take hours now happens automatically with better results.",
          author: "Creative Studio Founder",
        },
      },
    },
    {
      id: "marketing-strategy",
      title: "Marketing Strategy & Growth",
      desc: "For purpose-driven brands that want real traction",
      icon: "chart",
      color: "bg-blue-400",
      darkColor: "bg-blue-500",
      iconHoverColor: "group-hover:bg-blue-500",
      shadowColor: "blue",
      glowColor: "rgba(59, 130, 246, 0.6)",
      detailedContent: {
        headline: "Purpose-driven strategies that deliver real traction",
        paragraphs: [
          "Our basic content strategy with monthly content calendar helps you build consistent visibility and connect confidently with your audience, even when you're just starting out.",
          "For growing brands, we develop multi-platform content strategies with ghostwritten posts and comprehensive analytics dashboards to track performance and continuously improve.",
          "Our full partnership package includes custom content marketing strategy and production alongside paid and organic growth strategies for brands ready to make their mark.",
        ],
        stats: [
          { value: "47%", label: "increase in qualified leads" },
          {
            value: "62%",
            label: "higher engagement with purpose-driven content",
          },
          { value: "31%", label: "improvement in conversion rates" },
        ],
        testimonial: {
          quote:
            "The growth consulting transformed our business approach. We're not just more visible now—we're connecting with exactly the right people.",
          author: "Ethical Fashion Brand Founder",
        },
      },
    },
    {
      id: "content-creation",
      title: "Content Creation & Media Kits",
      desc: "From social to story, we make you unforgettable",
      icon: "compass",
      color: "bg-purple-400",
      darkColor: "bg-purple-500",
      iconHoverColor: "group-hover:bg-purple-500",
      shadowColor: "purple",
      glowColor: "rgba(139, 92, 246, 0.6)",
      detailedContent: {
        headline: "From social to story, we make your brand unforgettable",
        paragraphs: [
          "Our branding audit and positioning workshop helps new brands establish strong foundations and optimize social media presence to create consistent visibility.",
          "For established brands, we develop comprehensive brand guides and tone-of-voice frameworks that ensure your message resonates across all platforms and touchpoints.",
          "Our legacy-level service includes custom content marketing production across video, storytelling, and copy formats, designed to establish you as a thought leader in your space.",
        ],
        stats: [
          { value: "3.2×", label: "increase in social media engagement" },
          { value: "78%", label: "improvement in brand recognition" },
          { value: "67%", label: "higher content sharing rates" },
        ],
        testimonial: {
          quote:
            "The media kit BetterMorals created has opened doors we couldn't even approach before. My brand story finally resonates the way I always imagined.",
          author: "Independent Artist & Creator",
        },
      },
    },
    {
      id: "brand-development",
      title: "Brand & Platform Development",
      desc: "Launch or revamp with confidence and clarity",
      icon: "leaf",
      color: "bg-amber-400",
      darkColor: "bg-amber-500",
      iconHoverColor: "group-hover:bg-amber-500",
      shadowColor: "amber",
      glowColor: "rgba(245, 158, 11, 0.6)",
      detailedContent: {
        headline: "Launch or revamp with confidence and clarity",
        paragraphs: [
          "Our website and social media optimization services give startups and small brands the digital foundation they need to grow with intention and purpose.",
          "For scaling brands, we offer complete website or sales funnel builds (or revamps) alongside analytics dashboards that ensure your platform truly performs.",
          "Our comprehensive platform development includes consulting on hiring, delegation, and building your internal media/marketing team so your digital presence can scale with your vision.",
        ],
        stats: [
          { value: "56%", label: "increase in website conversion rate" },
          { value: "83%", label: "improvement in user engagement" },
          { value: "40%", label: "reduction in bounce rate" },
        ],
        testimonial: {
          quote:
            "Our platform rebuild changed everything. It's not just beautiful—it actually works, converting visitors and telling our story perfectly.",
          author: "Sustainable eCommerce Founder",
        },
      },
    },
  ];

  const serviceTiers = [
    {
      id: "tier1",
      title: "Tier 1 – The Spark",
      subtitle: "For small brands, startups, and artists who need strong roots",
      desc: "You've got something worth sharing, but the back-end systems and consistent visibility just aren't clicking yet. This starter tier gives you the strategy and automation backbone you need to show up with confidence—without burning out.",
      features: [
        "1–2 foundational automations (CRM, lead gen, email, etc.)",
        "Basic content strategy + monthly content calendar",
        "Branding audit + positioning workshop",
        "Website + social media optimization",
      ],
    },
    {
      id: "tier2",
      title: "Tier 2 – The System",
      subtitle:
        "For growing brands and collectives ready to scale with intention",
      desc: "You've outgrown the DIY phase. You're ready for better systems, better messaging, and a better way to connect with the right people. This is where the work starts compounding.",
      features: [
        "Full AI automation suite (client onboarding, scheduling, follow-up, etc.)",
        "Multi-platform content strategy + ghostwritten posts",
        "Brand guide + tone-of-voice development",
        "Website or sales funnel build (or revamp)",
        "Analytics dashboard + performance tracking",
      ],
    },
    {
      id: "tier3",
      title: "Tier 3 – The Legacy",
      subtitle:
        "For visionaries, thought leaders, and mission-driven companies creating deep impact",
      desc: "This is the full partnership package—consulting, content, and systems working together at scale. You want to be more than seen. You want to make a mark. And we'll make sure your systems, media, and message are aligned for that level of legacy.",
      features: [
        "High-converting AI-enhanced systems across departments (sales, ops, marketing)",
        "Custom content marketing strategy + production (video, storytelling, copy)",
        "Paid and organic growth strategy",
        "Consulting on hiring, delegation, or building your internal media/marketing team",
        "Monthly optimization + strategy calls",
      ],
    },
    {
      id: "addons",
      title: "A La Carte Services",
      subtitle:
        "Great for artists, creative professionals, and campaign-based clients",
      desc: "Need something specific? Our flexible add-on services can be tailored to your exact needs without committing to a full package.",
      features: [
        "Sales funnel design + email drip sequences",
        "Consultation Call & Audit",
        "AI tool training for small-large teams",
        "Pitch deck or investment branding",
        "Launch support + short-term campaign strategy",
      ],
    },
  ];

  // Handler for collapsing back to the grid
  const handleCollapse = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setExpandedService(null);

    // Reset animating state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  // Switch between services and tiers tabs
  const handleTabChange = (tab: string) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setExpandedService(null);
    setActiveTab(tab);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  // Get the expanded service details
  const expandedServiceData = expandedService
    ? services.find((s) => s.id === expandedService)
    : null;

  return (
    <>
      {/* Main Content Section */}
      <motion.section
        ref={sectionRef}
        className="relative pt-16 pb-24 px-6 overflow-hidden"
        animate={{
          backgroundColor: expandedService
            ? "rgb(17 24 39)"
            : "rgb(240 253 250)",
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Background elements for expanded mode */}
        <AnimatePresence>
          {expandedService && (
            <>
              {/* Animated grid background */}
              <motion.div
                className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {Array.from({ length: 144 }).map((_, i) => (
                  <div key={i} className="border-[0.5px] border-cyan-500/10" />
                ))}
              </motion.div>

              {/* Floating particles */}
              <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full animate-float-particle"
                    style={{
                      width: Math.random() * 3 + 1 + "px",
                      height: Math.random() * 3 + 1 + "px",
                      backgroundColor: `hsl(${
                        180 + Math.random() * 60
                      }, 100%, ${70 + Math.random() * 20}%)`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.4,
                      boxShadow: `0 0 ${Math.random() * 6 + 2}px ${
                        Math.random() * 2 + 1
                      }px hsl(${180 + Math.random() * 60}, 100%, 80%)`,
                      animationDuration: `${Math.random() * 30 + 20}s`,
                      animationDelay: `${Math.random() * 5}s`,
                    }}
                  />
                ))}
              </motion.div>

              {/* Glowing orbs */}
              <motion.div
                className="absolute top-1/4 -right-48 w-96 h-96 rounded-full opacity-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  background: expandedServiceData
                    ? `radial-gradient(circle, rgba(var(--${expandedServiceData.shadowColor}-rgb), 0.2), transparent 70%)`
                    : "radial-gradient(circle, rgba(6, 182, 212, 0.2), transparent 70%)",
                }}
              />

              <motion.div
                className="absolute bottom-1/4 -left-48 w-96 h-96 rounded-full opacity-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  background:
                    "radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent 70%)",
                }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Light theme background elements - only visible when not expanded */}
        <AnimatePresence>
          {!expandedService && (
            <>
              <motion.div
                className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal-100/30 blur-3xl rounded-full -z-10"
                initial={{ opacity: expandedService ? 0 : 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-100/20 blur-3xl rounded-full -z-10"
                initial={{ opacity: expandedService ? 0 : 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Mission Statement*/}
        {!expandedService && (
          <AnimatedSection
            className="mb-24 max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-100"
            delay={0.4}
          >
            <div className="text-center">
              <p className="text-gray-700 leading-relaxed">
                We&apos;re not here to chase trends or push tactics that
                don&apos;t align. We&apos;re here to help you grow in a way that
                feels aligned, ethical, and sustainable. Our approach is
                grounded in compassion, driven by data, and powered by AI that
                amplifies humanity—not replaces it.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                If you&apos;re here to change the world (or even just your
                corner of it), we&apos;re ready to build alongside you.
              </p>
            </div>
          </AnimatedSection>
        )}

        {/* Section heading  */}
        <div id="services-tab-section">
          <AnimatedSection
            className="relative z-10 max-w-7xl mx-auto text-center mb-8"
            delay={0.2}
          >
            <h2 className="text-4xl font-bold mb-4">
              <motion.span
                animate={{
                  color: expandedService ? "#ffffff" : "#111827",
                }}
                transition={{ duration: 0.4 }}
              >
                Our
              </motion.span>
              <span className="relative">
                <span className="absolute inset-0 animate-pulse-slow bg-amber-400/20 blur-xl rounded-lg -z-10"></span>
                <motion.span
                  className="text-neon-amber"
                  animate={{
                    textShadow: expandedService
                      ? "0 0 10px rgba(245, 158, 11, 0.6), 0 0 20px rgba(245, 158, 11, 0.4)"
                      : "0 0 5px rgba(245, 158, 11, 0.4), 0 0 10px rgba(245, 158, 11, 0.2)",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {activeTab === "services" ? " Services" : " Packages"}
                </motion.span>
              </span>
            </h2>

            <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6 shadow-neon-amber"></div>

            {/* Tab navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/80 backdrop-blur-sm p-1 rounded-full shadow-md">
                <button
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === "services"
                      ? "bg-amber-400 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => handleTabChange("services")}
                >
                  Services
                </button>
                <button
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === "tiers"
                      ? "bg-amber-400 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => handleTabChange("tiers")}
                >
                  Packages
                </button>
              </div>
            </div>

            <motion.p
              animate={{
                color: expandedService ? "rgb(209 213 219)" : "rgb(75 85 99)",
              }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              {activeTab === "services"
                ? "We specialize in creating ethical systems and powerful stories for brands that want to build a better world."
                : "Whether you're just starting out, scaling up, or creating your legacy—we've got a package for where you are and where you're going."}
            </motion.p>
          </AnimatedSection>
        </div>

        {/* Services grid with expanding card functionality */}
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {!expandedService ? (
              // Grid view
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === "services" ? (
                  // Services cards
                  <>
                    {services.map((service, index) => (
                      <AnimatedItem
                        key={service.id}
                        className="relative h-full"
                        delay={0.4}
                        index={index}
                        staggerDelay={0.1}
                        layoutId={`card-${service.id}`}
                      >
                        <div
                          className={`bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-neon-${service.shadowColor} transition-all duration-300 h-full flex flex-col`}
                          onClick={() => handleExpand(service.id)}
                        >
                          {/* Card content */}
                          <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-start mb-4">
                              {/* Icon */}
                              <motion.div
                                className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center text-white mr-4 shadow-md transition-all duration-300 ${service.iconHoverColor}`}
                                layoutId={`icon-${service.id}`}
                              >
                                {renderIcon(service.icon, 5)}
                              </motion.div>

                              {/* Title */}
                              <motion.h3
                                className="text-xl font-semibold text-gray-900"
                                layoutId={`title-${service.id}`}
                              >
                                {service.title}
                              </motion.h3>
                            </div>

                            {/* Description */}
                            <motion.p
                              className="text-gray-600 mb-6"
                              layoutId={`desc-${service.id}`}
                            >
                              {service.desc}
                            </motion.p>

                            {/* Spacer to push separator to bottom */}
                            <div className="flex-grow"></div>

                            {/* Separator line */}
                            <div className="w-full h-px bg-gray-200 mb-4 relative overflow-hidden">
                              <div
                                className={`absolute inset-y-0 left-0 w-0 bg-${service.shadowColor}-400 group-hover:w-full transition-all duration-500 ease-out`}
                              ></div>
                            </div>

                            {/* Learn more */}
                            <div className="flex justify-end mt-auto">
                              <span className="inline-flex items-center text-gray-500 group-hover:text-amber-500 transition-colors duration-300">
                                <span className="mr-1">Learn more</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="transform group-hover:translate-x-1 transition-transform duration-300"
                                >
                                  <path d="M5 12h14" />
                                  <path d="m12 5 7 7-7 7" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </AnimatedItem>
                    ))}
                  </>
                ) : (
                  // Tiers cards
                  <>
                    {serviceTiers.map((tier, index) => (
                      <AnimatedItem
                        key={tier.id}
                        className="relative h-full"
                        delay={0.4}
                        index={index}
                        staggerDelay={0.1}
                      >
                        <div
                          className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full flex flex-col ${
                            index === 2
                              ? "hover:shadow-neon-purple"
                              : index === 1
                              ? "hover:shadow-neon-blue"
                              : index === 0
                              ? "hover:shadow-neon-emerald"
                              : "hover:shadow-neon-amber"
                          }`}
                        >
                          {/* Card content */}
                          <div className="p-6 flex flex-col h-full">
                            <div className="mb-4">
                              {/* Title */}
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {tier.title}
                              </h3>
                              <p className="text-sm text-gray-500 italic">
                                {tier.subtitle}
                              </p>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 mb-6">{tier.desc}</p>

                            {/* Features */}
                            <div className="space-y-2 mb-6 flex-grow">
                              {tier.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 mr-2 flex-shrink-0 ${
                                      index === 2
                                        ? "text-purple-500"
                                        : index === 1
                                        ? "text-blue-500"
                                        : index === 0
                                        ? "text-emerald-500"
                                        : "text-amber-500"
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  <span className="text-gray-700">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Separator line */}
                            <div className="w-full h-px bg-gray-200 mb-4 relative overflow-hidden mt-auto">
                              <div
                                className={`absolute inset-y-0 left-0 w-0 ${
                                  index === 2
                                    ? "bg-purple-400"
                                    : index === 1
                                    ? "bg-blue-400"
                                    : index === 0
                                    ? "bg-emerald-400"
                                    : "bg-amber-400"
                                } group-hover:w-full transition-all duration-500 ease-out`}
                              ></div>
                            </div>

                            {/* CTA Button */}
                            <div className="flex justify-center mt-6">
                              <Link href="/contact">
                                <button
                                  className={`px-6 py-2 rounded-md ${
                                    index === 2
                                      ? "bg-purple-500 hover:bg-purple-600"
                                      : index === 1
                                      ? "bg-blue-500 hover:bg-blue-600"
                                      : index === 0
                                      ? "bg-emerald-500 hover:bg-emerald-600"
                                      : "bg-amber-500 hover:bg-amber-600"
                                  } text-white font-medium transition-all`}
                                >
                                  Book A Free Strategy Session
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </AnimatedItem>
                    ))}
                  </>
                )}
              </motion.div>
            ) : (
              // Expanded view (single detailed card) with dark neon theme
              <motion.div
                className="relative w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                layoutId={`card-${expandedService}`}
              >
                <div
                  className={`bg-gray-800/80 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700/60 shadow-neon-${expandedServiceData?.shadowColor} transition-all duration-300`}
                >
                  {/* Back button */}
                  <div className="absolute top-4 left-4 z-10">
                    <button
                      onClick={handleCollapse}
                      className={`p-2 rounded-full bg-gray-800 shadow-md ${
                        expandedServiceData
                          ? `hover:shadow-neon-${expandedServiceData.shadowColor}`
                          : ""
                      } transition-all duration-300 text-white group border border-gray-700/60`}
                    >
                      {renderIcon("arrow-left", 5)}
                    </button>
                  </div>

                  {/* Expanded card header */}
                  <div className="p-8 pb-4 flex items-start">
                    <motion.div
                      className={`w-16 h-16 ${
                        expandedServiceData?.darkColor || ""
                      } rounded-lg flex items-center justify-center text-white mr-6 shadow-neon-${
                        expandedServiceData?.shadowColor || ""
                      }`}
                      layoutId={`icon-${expandedService}`}
                    >
                      {expandedServiceData &&
                        renderIcon(expandedServiceData.icon, 7)}
                    </motion.div>

                    <div>
                      <motion.h3
                        className="text-2xl font-bold text-white mb-2"
                        layoutId={`title-${expandedService}`}
                      >
                        {expandedServiceData?.title}
                      </motion.h3>

                      <motion.p
                        className="text-gray-300"
                        layoutId={`desc-${expandedService}`}
                      >
                        {expandedServiceData?.desc}
                      </motion.p>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="w-full h-px bg-gray-700/60"></div>
                  {/* Expanded content */}
                  <div className="p-8">
                    {/* Headline with neon glow */}
                    <motion.h4
                      className={`text-xl font-semibold text-neon-${expandedServiceData?.shadowColor} mb-6`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      style={{
                        textShadow: `0 0 10px ${expandedServiceData?.glowColor}, 0 0 20px ${expandedServiceData?.glowColor}`,
                      }}
                    >
                      {expandedServiceData?.detailedContent.headline}
                    </motion.h4>

                    {/* Main content in 2 columns on larger screens */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Left column - Paragraphs */}
                      <div className="lg:col-span-2 space-y-4">
                        {expandedServiceData?.detailedContent.paragraphs.map(
                          (paragraph, idx) => (
                            <motion.p
                              key={idx}
                              className="text-gray-300"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.2 + idx * 0.1,
                              }}
                            >
                              {paragraph}
                            </motion.p>
                          )
                        )}

                        {/* Testimonial */}
                        <motion.div
                          className="mt-8 bg-gray-800/50 rounded-lg p-6 border-l-4 border-l-cyan-400 italic"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <p className="text-gray-300 mb-2">
                            &quot;
                            {
                              expandedServiceData?.detailedContent.testimonial
                                .quote
                            }
                            &quot;
                          </p>
                          <p className="text-gray-400 text-sm not-italic">
                            —{" "}
                            {
                              expandedServiceData?.detailedContent.testimonial
                                .author
                            }
                          </p>
                        </motion.div>
                      </div>

                      {/* Right column - Stats */}
                      <div className="space-y-6">
                        <motion.h5
                          className="text-lg font-medium text-white"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          Key Results
                        </motion.h5>

                        {expandedServiceData?.detailedContent.stats.map(
                          (stat, idx) => (
                            <motion.div
                              key={idx}
                              className="bg-gray-800/30 border border-gray-700/40 rounded-lg p-4 shadow-sm hover:shadow-neon-sm transition-shadow duration-300"
                              initial={{ opacity: 0, x: 30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 0.3 + idx * 0.1,
                              }}
                            >
                              <div
                                className={`text-2xl font-bold text-${expandedServiceData.shadowColor}-400 mb-1`}
                                style={{
                                  textShadow: `0 0 10px ${expandedServiceData.glowColor}`,
                                }}
                              >
                                {stat.value}
                              </div>
                              <div className="text-gray-300 text-sm">
                                {stat.label}
                              </div>
                            </motion.div>
                          )
                        )}

                        {/* CTA */}
                        <motion.div
                          className="mt-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          <button
                            className={`group w-full py-3 px-6 bg-gray-800 border border-${expandedServiceData?.shadowColor}-500/50 text-white rounded-lg shadow-neon-${expandedServiceData?.shadowColor} hover:shadow-neon-lg-${expandedServiceData?.shadowColor} transition-all duration-500 relative overflow-hidden`}
                            style={{
                              textShadow: `0 0 5px ${expandedServiceData?.glowColor}`,
                            }}
                          >
                            {/* Glow effect on hover */}
                            <span
                              className={`absolute inset-0 w-0 bg-${expandedServiceData?.shadowColor}-500/20 group-hover:w-full transition-all duration-700`}
                            ></span>

                            {/* Text content */}
                            <span className="relative flex items-center justify-center">
                              Get Started
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                              >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                              </svg>
                            </span>
                          </button>
                        </motion.div>
                      </div>
                    </div>

                    {/* Digital lines flowing through the card */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      {/* Horizontal lines */}
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                          key={`h-${i}`}
                          className={`absolute h-px bg-gradient-to-r from-transparent via-${expandedServiceData?.shadowColor}-400/40 to-transparent`}
                          style={{
                            top: `${15 + i * 20}%`,
                            left: 0,
                            right: 0,
                          }}
                          initial={{ opacity: 0, translateX: "-100%" }}
                          animate={{
                            opacity: 0.3,
                            translateX: "100%",
                            transition: {
                              opacity: { duration: 0.5, delay: 0.3 + i * 0.1 },
                              translateX: {
                                duration: 15 + i * 2,
                                ease: "linear",
                                repeat: Infinity,
                                delay: 0.3 + i * 0.5,
                              },
                            },
                          }}
                        />
                      ))}

                      {/* Vertical lines */}
                      {Array.from({ length: 3 }).map((_, i) => (
                        <motion.div
                          key={`v-${i}`}
                          className={`absolute w-px bg-gradient-to-b from-transparent via-${expandedServiceData?.shadowColor}-400/40 to-transparent`}
                          style={{
                            left: `${25 + i * 25}%`,
                            top: 0,
                            bottom: 0,
                          }}
                          initial={{ opacity: 0, translateY: "-100%" }}
                          animate={{
                            opacity: 0.3,
                            translateY: "100%",
                            transition: {
                              opacity: { duration: 0.5, delay: 0.3 + i * 0.1 },
                              translateY: {
                                duration: 15 + i * 2,
                                ease: "linear",
                                repeat: Infinity,
                                delay: 0.3 + i * 0.5,
                              },
                            },
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA button - only show when no expanded service */}
        {!expandedService && (
          <AnimatedSection className="text-center mt-16" delay={0.6}>
            <Link href="/services">
              <motion.button
                className="group relative inline-flex items-center justify-center px-8 py-3 rounded-lg bg-amber-400 text-white font-medium transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                {/* Neon glow effect that pulses on hover */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-amber-400 shadow-neon-amber-lg"></span>

                <span className="relative flex items-center">
                  Get Your BetterMorals Blueprint
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </motion.button>
            </Link>
          </AnimatedSection>
        )}
      </motion.section>
    </>
  );
}
