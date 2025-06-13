import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { SetStateAction, useRef, useState } from "react";

export default function ServicesOverviewCards() {
  const [activeTab, setActiveTab] = useState("services");
  const sectionRef = useRef(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);

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

  // Handler for expanding a service card
  const handleExpand = (serviceId: SetStateAction<string | null>) => {
    setExpandedService(serviceId);
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
          { value: "92%", label: "reduction in manual tasks" },
          { value: "4.2×", label: "faster client processing" },
          { value: "$2.1M+", label: "additional revenue generated" },
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
          { value: "280%", label: "average revenue growth" },
          { value: "68%", label: "increase in qualified leads" },
          { value: "4.1", label: "average ROAS achieved" },
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
          { value: "420%", label: "increase in social engagement" },
          { value: "85%", label: "improvement in brand recognition" },
          { value: "$1.2M+", label: "in content-driven sales" },
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
          { value: "73%", label: "increase in conversion rate" },
          { value: "156%", label: "improvement in user engagement" },
          { value: "52%", label: "reduction in bounce rate" },
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
    setExpandedService(null);
  };

  // Switch between services and tiers tabs
  const handleTabChange = (tab: string) => {
    setExpandedService(null);
    setActiveTab(tab);
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
            ? "rgba(17, 24, 39, 0.98)"
            : "rgb(240, 253, 250)",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {/* Background elements for expanded mode - simplified */}
        <AnimatePresence>
          {expandedService && (
            <>
              {/* Dark overlay to cover parent background */}
              <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{
                  background: `linear-gradient(135deg, rgba(17, 24, 39, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%)`,
                }}
              />

              {/* Simple gradient overlay */}
              <motion.div
                className="absolute inset-0 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  background: `
                    radial-gradient(circle at 20% 30%, rgba(6, 182, 212, 0.06) 0%, transparent 50%),
                    radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)
                  `,
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
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-100/20 blur-3xl rounded-full -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Mission Statement - Now persists with theme transition */}
        <motion.div
          className="mb-24 max-w-4xl mx-auto rounded-xl p-8 shadow-lg border relative z-20"
          animate={{
            backgroundColor: expandedService
              ? "rgba(31, 41, 55, 0.8)"
              : "rgba(255, 255, 255, 0.8)",
            borderColor: expandedService
              ? "rgba(75, 85, 99, 0.6)"
              : "rgba(229, 231, 235, 1)",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="text-center">
            <motion.p
              className="leading-relaxed"
              animate={{
                color: expandedService
                  ? "rgb(209, 213, 219)"
                  : "rgb(55, 65, 81)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              We&apos;re not here to chase trends or push tactics that
              don&apos;t align. We&apos;re here to help you grow in a way that
              feels aligned, ethical, and sustainable. Our approach is grounded
              in compassion, driven by data, and powered by AI that amplifies
              humanity—not replaces it.
            </motion.p>
            <motion.p
              className="mt-4 leading-relaxed"
              animate={{
                color: expandedService
                  ? "rgb(209, 213, 219)"
                  : "rgb(55, 65, 81)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              If you&apos;re here to change the world (or even just your corner
              of it), we&apos;re ready to build alongside you.
            </motion.p>
          </div>
        </motion.div>

        {/* Section heading  */}
        <div id="services-tab-section" className="relative z-20">
          <motion.div className="relative max-w-7xl mx-auto text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">
              <motion.span
                animate={{
                  color: expandedService ? "#ffffff" : "#111827",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
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
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {activeTab === "services" ? " Services" : " Packages"}
                </motion.span>
              </span>
            </h2>

            <div className="w-24 h-0.5 bg-amber-400 mx-auto mb-6 shadow-neon-amber"></div>

            {/* Tab navigation - only show when not expanded */}
            <AnimatePresence>
              {!expandedService && (
                <motion.div
                  className="flex justify-center mb-8"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
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
                </motion.div>
              )}
            </AnimatePresence>

            <motion.p
              animate={{
                color: expandedService ? "rgb(209 213 219)" : "rgb(75 85 99)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="max-w-2xl mx-auto"
            >
              {activeTab === "services"
                ? "We specialize in creating ethical systems and powerful stories for brands that want to build a better world."
                : "Whether you're just starting out, scaling up, or creating your legacy—we've got a package for where you are and where you're going."}
            </motion.p>
          </motion.div>
        </div>

        {/* Services grid with expanding card functionality */}
        <div className="max-w-7xl mx-auto relative z-20">
          {/* Larger height container to accommodate bigger expanded card */}
          <div className="min-h-[800px] flex items-start justify-center">
            <AnimatePresence mode="wait">
              {!expandedService ? (
                // Grid view
                <motion.div
                  key="grid-view"
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {activeTab === "services" ? (
                    // Services cards
                    <>
                      {services.map((service, index) => (
                        <motion.div
                          key={service.id}
                          className="relative h-full"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.05,
                            ease: "easeOut",
                          }}
                          whileHover={{ y: -3, scale: 1.01 }}
                        >
                          <div
                            className={`bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-neon-${service.shadowColor} transition-all duration-300 h-full flex flex-col`}
                            onClick={() => handleExpand(service.id)}
                          >
                            {/* Card content */}
                            <div className="p-6 flex flex-col flex-grow">
                              <div className="flex items-start mb-4">
                                {/* Icon */}
                                <div
                                  className={`w-24 h-24 ${service.color} rounded-lg flex items-center justify-center text-white mr-4 shadow-md transition-all duration-300 ${service.iconHoverColor}`}
                                >
                                  {renderIcon(service.icon, 5)}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-gray-900">
                                  {service.title}
                                </h3>
                              </div>

                              {/* Description */}
                              <p className="text-gray-600 mb-6">
                                {service.desc}
                              </p>

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
                        </motion.div>
                      ))}
                    </>
                  ) : (
                    // Tiers cards
                    <>
                      {serviceTiers.map((tier, index) => (
                        <motion.div
                          key={tier.id}
                          className="relative h-full"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.05,
                            ease: "easeOut",
                          }}
                          whileHover={{ y: -3, scale: 1.01 }}
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
                        </motion.div>
                      ))}
                    </>
                  )}
                </motion.div>
              ) : (
                // Expanded view (single detailed card) - full width and much larger
                <motion.div
                  key="expanded-view"
                  className="relative w-full max-w-6xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div
                    className={`bg-gray-800/95 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700/60 shadow-neon-${expandedServiceData?.shadowColor} transition-all duration-300 max-w-6xl mx-auto min-h-[700px]`}
                  >
                    {/* Back button - positioned to avoid logo overlap */}
                    <div className="absolute top-8 right-8 z-20">
                      <button
                        onClick={handleCollapse}
                        className={`p-3 rounded-full bg-gray-900/80 backdrop-blur-sm shadow-lg hover:shadow-neon-${expandedServiceData?.shadowColor} transition-all duration-300 text-white group border border-gray-600/40 hover:border-${expandedServiceData?.shadowColor}-500/50`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="rotate-180"
                        >
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                      </button>
                    </div>

                    {/* Hero section with large icon and title */}
                    <div className="p-12 pb-8">
                      <div className="flex flex-col items-center text-center mb-8">
                        {/* Large icon */}
                        <div
                          className={`w-24 h-24 ${
                            expandedServiceData?.darkColor || ""
                          } rounded-2xl flex items-center justify-center text-white mb-6 shadow-neon-${
                            expandedServiceData?.shadowColor || ""
                          } transition-all duration-300`}
                        >
                          {expandedServiceData &&
                            renderIcon(expandedServiceData.icon, 8)}
                        </div>

                        {/* Large title */}
                        <h3 className="text-4xl font-bold text-white mb-4 leading-tight">
                          {expandedServiceData?.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="text-xl text-gray-300 max-w-2xl">
                          {expandedServiceData?.desc}
                        </p>
                      </div>

                      {/* Separator with gradient */}
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

                      {/* Large headline with enhanced neon glow */}
                      <h4
                        className={`text-2xl font-bold text-center text-neon-${expandedServiceData?.shadowColor} mb-12`}
                        style={{
                          textShadow: `0 0 15px ${expandedServiceData?.glowColor}, 0 0 30px ${expandedServiceData?.glowColor}`,
                        }}
                      >
                        {expandedServiceData?.detailedContent.headline}
                      </h4>

                      {/* Enhanced layout */}
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Left column - Content (takes up more space) */}
                        <div className="lg:col-span-3 space-y-8">
                          {/* Key paragraph - larger text */}
                          <div className="space-y-6">
                            <p className="text-gray-300 text-lg leading-relaxed">
                              {
                                expandedServiceData?.detailedContent
                                  .paragraphs[0]
                              }
                            </p>

                            {/* Additional paragraphs if available */}
                            {expandedServiceData?.detailedContent.paragraphs
                              .slice(1)
                              .map((paragraph, idx) => (
                                <p
                                  key={idx}
                                  className="text-gray-400 text-base leading-relaxed"
                                >
                                  {paragraph}
                                </p>
                              ))}
                          </div>

                          {/* Enhanced testimonial */}
                          <div className="bg-gray-900/60 rounded-xl p-8 border border-gray-700/40 relative overflow-hidden">
                            {/* Accent border */}
                            <div
                              className={`absolute left-0 top-0 bottom-0 w-1 bg-${expandedServiceData?.shadowColor}-400`}
                              style={{
                                boxShadow: `0 0 10px ${expandedServiceData?.glowColor}`,
                              }}
                            ></div>

                            <blockquote className="text-gray-200 text-lg italic mb-4 leading-relaxed">
                              &quot;
                              {
                                expandedServiceData?.detailedContent.testimonial
                                  .quote
                              }
                              &quot;
                            </blockquote>
                            <cite className="text-gray-400 text-base not-italic font-medium">
                              —{" "}
                              {
                                expandedServiceData?.detailedContent.testimonial
                                  .author
                              }
                            </cite>
                          </div>
                        </div>

                        {/* Right column - Stats (larger and more prominent) */}
                        <div className="lg:col-span-2 space-y-6">
                          <h5 className="text-2xl font-bold text-white text-center mb-8">
                            Key Results
                          </h5>

                          {expandedServiceData?.detailedContent.stats.map(
                            (stat, idx) => (
                              <div
                                key={idx}
                                className="bg-gray-900/40 border border-gray-700/60 rounded-xl p-6 text-center backdrop-blur-sm hover:border-gray-600/80 transition-all duration-300"
                              >
                                <div
                                  className={`text-4xl font-bold text-${expandedServiceData.shadowColor}-400 mb-3`}
                                  style={{
                                    textShadow: `0 0 15px ${expandedServiceData.glowColor}`,
                                  }}
                                >
                                  {stat.value}
                                </div>
                                <div className="text-gray-300 text-base leading-snug">
                                  {stat.label}
                                </div>
                              </div>
                            )
                          )}

                          {/* Enhanced CTA */}
                          <div className="mt-10">
                            <Link href="/contact">
                              <button
                                className={`group w-full py-4 px-6 bg-gradient-to-r from-gray-800 to-gray-900 border border-${expandedServiceData?.shadowColor}-500/50 text-white rounded-xl shadow-neon-${expandedServiceData?.shadowColor} hover:shadow-neon-lg-${expandedServiceData?.shadowColor} transition-all duration-500 relative overflow-hidden text-lg font-medium`}
                                style={{
                                  textShadow: `0 0 8px ${expandedServiceData?.glowColor}`,
                                }}
                              >
                                <span className="relative flex items-center justify-center">
                                  Get Started
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="ml-3 group-hover:translate-x-1 transition-transform duration-300"
                                  >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                  </svg>
                                </span>

                                {/* Gradient overlay on hover */}
                                <div
                                  className={`absolute inset-0 bg-gradient-to-r from-${expandedServiceData?.shadowColor}-600/20 to-${expandedServiceData?.shadowColor}-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}
                                ></div>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced background pattern - toned down and pulsating */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                        <div
                          className="absolute inset-0 animate-pulse-slow"
                          style={{
                            backgroundImage: `
                              radial-gradient(circle at 15% 20%, ${expandedServiceData?.glowColor?.replace(
                                "0.6",
                                "0.15"
                              )} 0px, transparent 80px),
                              radial-gradient(circle at 85% 30%, ${expandedServiceData?.glowColor?.replace(
                                "0.6",
                                "0.12"
                              )} 0px, transparent 100px),
                              radial-gradient(circle at 25% 80%, ${expandedServiceData?.glowColor?.replace(
                                "0.6",
                                "0.08"
                              )} 0px, transparent 120px),
                              radial-gradient(circle at 75% 85%, ${expandedServiceData?.glowColor?.replace(
                                "0.6",
                                "0.1"
                              )} 0px, transparent 90px)
                            `,
                            backgroundSize:
                              "400px 400px, 500px 500px, 450px 450px, 350px 350px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA button - only show when not expanded */}
        <AnimatePresence>
          {!expandedService && (
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link href="/contact">
                <motion.button
                  className="group relative inline-flex items-center justify-center px-8 py-3 rounded-lg transition-all duration-300 overflow-hidden"
                  animate={{
                    backgroundColor: "rgb(245, 158, 11)",
                    color: "rgb(255, 255, 255)",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* CSS animations and custom classes */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }

        .text-neon-amber {
          color: #f59e0b;
          text-shadow: 0 0 8px rgba(245, 158, 11, 0.6),
            0 0 20px rgba(245, 158, 11, 0.4);
        }

        .text-neon-emerald {
          color: #10b981;
          text-shadow: 0 0 8px rgba(16, 185, 129, 0.6),
            0 0 20px rgba(16, 185, 129, 0.4);
        }

        .text-neon-blue {
          color: #3b82f6;
          text-shadow: 0 0 8px rgba(59, 130, 246, 0.6),
            0 0 20px rgba(59, 130, 246, 0.4);
        }

        .text-neon-purple {
          color: #8b5cf6;
          text-shadow: 0 0 8px rgba(139, 92, 246, 0.6),
            0 0 20px rgba(139, 92, 246, 0.4);
        }

        .shadow-neon-emerald {
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
        }

        .shadow-neon-blue {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
        }

        .shadow-neon-purple {
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
        }

        .shadow-neon-amber {
          box-shadow: 0 0 15px rgba(245, 158, 11, 0.4);
        }

        .shadow-neon-sm {
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
        }

        .shadow-neon-lg-emerald {
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.6);
        }

        .shadow-neon-lg-blue {
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.6);
        }

        .shadow-neon-lg-purple {
          box-shadow: 0 0 25px rgba(139, 92, 246, 0.6);
        }

        .shadow-neon-lg-amber {
          box-shadow: 0 0 25px rgba(245, 158, 11, 0.6);
        }

        .shadow-neon-amber-lg {
          box-shadow: 0 0 25px rgba(245, 158, 11, 0.6);
        }

        :root {
          --emerald-rgb: 16, 185, 129;
          --blue-rgb: 59, 130, 246;
          --purple-rgb: 139, 92, 246;
          --amber-rgb: 245, 158, 11;
        }
      `}</style>
    </>
  );
}
