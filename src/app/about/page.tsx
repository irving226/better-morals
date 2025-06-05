"use client";

import { useState, useEffect, SetStateAction } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";

// Team members data (remains unchanged)
const teamMembers = [
  {
    name: "Clarity Skyz",
    role: "Founder & AI Strategist",
    bio: "Clarity Skyz is the visionary behind Better Morals—a company born from the belief that marketing doesn't have to be manipulative to be effective, and that technology should be used to amplify creativity, not erase it. With a career rooted in storytelling, brand-building, and automation design, Clarity blends the imaginative with the strategic.",
    fullBio:
      "Clarity Skyz is the visionary behind Better Morals—a company born from the belief that marketing doesn't have to be manipulative to be effective, and that technology should be used to *amplify* creativity, not erase it. With a career rooted in storytelling, brand-building, and automation design, Clarity blends the imaginative with the strategic. From launching full-scale brand ecosystems to building AI systems that support artists and small businesses, their work lives at the intersection of ethics, innovation, and deep human connection. Clarity has partnered with creators, visionaries, and cultural disruptors to develop authentic messaging, automate workflows, and scale with soul. They're especially passionate about helping marginalized voices find clarity, confidence, and momentum in a world that too often tries to silence them. A lifelong student of the strange and strategic Clarity founded Better Morals as both a business and a movement: to rewrite the rules, elevate the creative class, and build a future where doing the right thing isn't a compromise, it's the competitive edge.",
    skills: ["AI Ethics", "Marketing Strategy", "Neuroscience"],
    image: "/team/alex.jpg",
    socialLinks: {
      twitter: "https://twitter.com/alexmorgan",
      linkedin: "https://linkedin.com/in/alexmorgan",
    },
    accentColor: "from-cyan-400 to-teal-500",
  },
  {
    name: "Elizabeth So",
    role: "Creative Director",
    bio: "With a decade-long career as a Doctor of East Asian Medicine and an academic foundation in deconstructive sociology, Liz brings a rare synthesis of intuition, critical thinking, and artistic vision to Better Morals. Her creative work is informed by a deep understanding of global systems and the subtle forces that shape human behavior.",
    fullBio:
      "With a decade-long career as a Doctor of East Asian Medicine and an academic foundation in deconstructive sociology, Liz brings a rare synthesis of intuition, critical thinking, and artistic vision to Better Morals. Her creative work is informed by a deep understanding of global systems and the subtle forces that shape human behavior—making her a natural fit for a company committed to intentional, ethical marketing. She joined Better Morals during a self-directed sabbatical, seeking new ways to respond to a rapidly shifting technological and cultural landscape. Rather than retreating from change, Liz chose to channel her skills into creative direction that empowers small businesses and soulful entrepreneurs to tell their stories with clarity, depth, and integrity. Her approach is both justice oriented and deeply strategic and grounded in the belief that marketing can be used to redistribute resources, amplify marginalized voices, and challenge dominant narratives. As a lifelong student of collective wisdom, Liz sees this work as part of a broader project: helping shift global awareness and rebalance power during a time of massive change.",
    skills: ["Visual Design", "Narrative Strategy", "Brand Development"],
    image: "So.png",
    socialLinks: {
      twitter: "https://twitter.com/jordanrivers",
      linkedin: "https://linkedin.com/in/jordanrivers",
    },
    accentColor: "from-purple-400 to-fuchsia-500",
  },
  {
    name: "Brian Irving",
    role: "Tech Lead",
    bio: "Brian serves a pivotal role at Better Morals thanks to his experience spanning elite tech and military environments, blending technical depth with a people-first mindset. His early years as a U.S. Army paratrooper shaped a bias for action and adaptability—skills he carried into roles building scalable AI and automation systems at AWS and beyond.",
    fullBio:
      "Brian serves a pivitol role at Better Morals thanks to his experience spanning elite tech and military environments, blending technical depth with a people-first mindset. His early years as a U.S. Army paratrooper shaped a bias for action and adaptability—skills he carried into roles building scalable AI and automation systems at AWS and beyond. At Better Morals, Brian focuses on ethical, human-centered tech that amplifies creativity rather than replaces it. From streamlining backend workflows to crafting intuitive AI tools, he helps creators, ethical brands, and mission-driven teams grow without compromising their values.A lifelong musician and active supporter of creative communities, Brian bridges engineering with culture—making tech that resonates just as much as it runs. Whether he's building infrastructure or supporting artists, his goal stays the same: use technology to scale impact and deepen connection.",
    skills: ["Systems Architecture", "AI Implementation", "Automation"],
    image: "irving.JPG",
    socialLinks: {
      twitter: "https://twitter.com/taylorzhang",
      linkedin: "https://linkedin.com/in/taylorzhang",
    },
    accentColor: "from-blue-400 to-indigo-500",
  },
];

// About section content (remains unchanged)
const aboutContent = [
  {
    title: "Our History",
    desc: "Better Morals began with a simple but rebellious idea: that marketing could be a force for good. Born out of late-night brainstorms between artists and strategists who were tired of soulless sales tactics and extractive business models. What started as a solo venture helping indie creators quickly grew into a full-service agency working with everyone from underground collectives to high-profile visionaries. With each client, our mission stayed the same: use AI and automation not to replace people—but to empower them.",
    icon: "history",
    color: "from-cyan-400 to-teal-300",
  },
  {
    title: "Our Mission",
    desc: "To empower good people to do great things with the help of technology that amplifies integrity, not replaces it. Whether you're an artist collective, a TTRPG creator, a high-profile visionary, or a small biz with a big dream—we meet you where you are and build systems that let your genius thrive. We're not here for short-term wins, we're here to create long-term impact. Every strategy we develop is rooted in transparency, empathy, and a commitment to lifting up the creative economy.",
    icon: "target",
    color: "from-purple-400 to-fuchsia-300",
  },
];

export default function DiscoverSection() {
  const [activeTeamMember, setActiveTeamMember] = useState(0);
  const [hoveredMember, setHoveredMember] = useState(null);
  const [showFullBio, setShowFullBio] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTeamMember((prev) => (prev + 1) % teamMembers.length);
      setShowFullBio(false);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const renderIcon = (iconName: string) => {
    // ... (renderIcon function remains unchanged)
    switch (iconName) {
      case "history":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        );
      case "target":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        );
      default:
        return null;
    }
  };

  const currentMember = teamMembers[activeTeamMember];

  return (
    <section className="relative overflow-hidden py-24 bg-gray-950 text-white">
      {/* Dynamic Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full opacity-20 bg-gradient-to-br from-cyan-500/30 to-transparent blur-[80px]"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full opacity-15 bg-gradient-to-br from-purple-500/30 to-transparent blur-[80px]"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full opacity-10 bg-gradient-to-br from-blue-500/30 to-transparent blur-[80px]"></div>
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="h-full w-full grid grid-cols-12 grid-rows-12">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-cyan-500/10" />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`h-line-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
              style={{
                top: `${15 + i * 16}%`,
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
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="max-w-5xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Discover{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-2 bg-gradient-to-r from-cyan-600/30 to-cyan-400/30 blur-xl rounded-lg"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500">
                Better Morals
              </span>
            </span>{" "}
            Marketing
          </h1>

          <motion.div
            className="max-w-3xl mx-auto mt-8 mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <p className="text-xl sm:text-2xl text-cyan-100 leading-relaxed font-light">
              We empower your brand with AI-driven marketing that&apos;s both{" "}
              <span className="font-medium text-white">highly effective</span>{" "}
              and <span className="font-medium text-white">deeply ethical</span>
              .
            </p>
            <p className="mt-3 text-lg text-gray-300">
              Achieve remarkable results without compromising your core values.
            </p>
          </motion.div>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto rounded-full shadow-glow"></div>
        </motion.div>
        {/* About Section - New Wave Moral High Ground */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <motion.div
              className="inline-block mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <span className="text-sm font-medium tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-6 py-3 rounded-full border border-emerald-500/20 backdrop-blur-sm">
                  ✨ New Wave Agency
                </span>
              </div>
            </motion.div>

            <h2 className="text-4xl sm:text-6xl font-light mb-8 leading-tight tracking-wide">
              <span className="text-white">When Institutions</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 font-medium">
                Lose Their Way
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-light">
                We Remember Ours
              </span>
            </h2>

            <div className="max-w-5xl mx-auto">
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed mb-8 font-light">
                In a world where trust has become a commodity and human dignity
                is negotiable,
                <span className="font-medium text-white">
                  {" "}
                  we choose to be stewards of something sacred
                </span>
                — the creative spirit and the bonds that connect us all.
              </p>
              <p className="text-lg text-emerald-100 font-light">
                This is marketing as it was meant to be: honest, generative, and
                deeply human.
              </p>
            </div>
          </div>

          {/* The Journey Through Principles */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central Flowing River */}
            <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 hidden lg:block">
              <svg width="4" height="100%" className="overflow-visible">
                <defs>
                  <linearGradient
                    id="riverGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
                    <stop offset="25%" stopColor="#ef4444" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                    <stop offset="75%" stopColor="#06b6d4" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <line
                  x1="2"
                  y1="0"
                  x2="2"
                  y2="100%"
                  stroke="url(#riverGradient)"
                  strokeWidth="4"
                  strokeDasharray="20,10"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="30"
                    to="0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </line>
              </svg>

              {/* Flowing Particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 left-1/2 transform -translate-x-1/2"
                  style={{ top: `${i * 20}%` }}
                  animate={{
                    y: ["0%", "100vh"],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: i * 1.6,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Principle Stations */}
            <div className="space-y-24">
              {[
                {
                  phase: "The Erosion",
                  title: "Where We've Been",
                  icon: "🏛️",
                  color: "from-amber-500 to-orange-500",
                  bgColor: "from-amber-950/30 to-orange-950/30",
                  borderColor: "border-amber-500/20",
                  description:
                    "Trusted institutions—media, corporations, even creative agencies—have traded integrity for profit. The social contract is broken. Human connection has been commodified.",
                  principles: [
                    "Trust became a marketing tactic",
                    "Creativity was outsourced to algorithms",
                    "Human welfare became secondary to quarterly reports",
                    "Surveillance disguised itself as personalization",
                  ],
                },
                {
                  phase: "The Awakening",
                  title: "What We've Learned",
                  icon: "👁️",
                  color: "from-purple-500 to-indigo-500",
                  bgColor: "from-purple-950/30 to-indigo-950/30",
                  borderColor: "border-purple-500/20",
                  description:
                    "Real prosperity flows from abundance thinking, not scarcity. When we invest in people—creatives, clients, communities—we create value that compounds across generations.",
                  principles: [
                    "Transparency builds deeper trust than any sales funnel",
                    "Fair compensation attracts exceptional talent",
                    "Ethical practices create sustainable competitive advantages",
                    "Human dignity is non-negotiable—and profitable",
                  ],
                },
                {
                  phase: "The Practice",
                  title: "How We Operate",
                  icon: "🌱",
                  color: "from-emerald-500 to-cyan-500",
                  bgColor: "from-emerald-950/30 to-cyan-950/30",
                  borderColor: "border-emerald-500/20",
                  description:
                    "Every campaign, every client relationship, every internal decision is guided by one question: Does this honor the creative spirit and strengthen human connection?",
                  principles: [
                    "AI amplifies human creativity—never replaces it",
                    "Marketing builds bridges, not psychological traps",
                    "Privacy is protected, not plundered for profit",
                    "Success is measured in relationships, not just revenue",
                  ],
                },
              ].map((station, index) => (
                <motion.div
                  key={index}
                  className={`relative ${
                    index % 2 === 0 ? "lg:pr-16" : "lg:pl-16 lg:ml-auto"
                  } lg:w-1/2`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Connection Point */}
                  <div
                    className={`absolute top-8 ${
                      index % 2 === 0
                        ? "right-0 lg:right-[-2px]"
                        : "left-0 lg:left-[-2px]"
                    } w-6 h-6 rounded-full bg-gradient-to-r ${
                      station.color
                    } hidden lg:flex items-center justify-center z-20`}
                  >
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>

                  <div
                    className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${station.bgColor} backdrop-blur-sm border ${station.borderColor} p-8 group hover:border-opacity-40 transition-all duration-700`}
                  >
                    {/* Gentle Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${station.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
                    ></div>

                    {/* Subtle Border Animation */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                      <motion.div
                        className={`absolute inset-0 border border-gradient-to-r ${station.color} opacity-20`}
                        style={{
                          background: `conic-gradient(from 0deg, transparent 60%, ${
                            station.color.includes("amber")
                              ? "#f59e0b"
                              : station.color.includes("purple")
                              ? "#8b5cf6"
                              : "#10b981"
                          }20 80%, transparent)`,
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center gap-6 mb-8">
                        <div
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${station.color} flex items-center justify-center text-4xl shadow-2xl`}
                        >
                          {station.icon}
                        </div>
                        <div>
                          <div
                            className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${station.color} uppercase tracking-widest mb-2`}
                          >
                            {station.phase}
                          </div>
                          <h3 className="text-3xl font-light text-white">
                            {station.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-gray-200 leading-relaxed mb-8 font-light">
                        {station.description}
                      </p>

                      {/* Principles */}
                      <div className="space-y-4">
                        {station.principles.map((principle, i) => (
                          <motion.div
                            key={i}
                            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                            initial={{
                              opacity: 0,
                              x: index % 2 === 0 ? -20 : 20,
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + 0.3 }}
                            viewport={{ once: true }}
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${station.color} mt-3 flex-shrink-0`}
                            ></div>
                            <p className="text-gray-300 font-light leading-relaxed">
                              {principle}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* The Sacred Commitment */}
          <motion.div
            className="text-center mt-24 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Mandala */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <motion.div
                className="w-96 h-96 rounded-full border border-emerald-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-8 rounded-full border border-cyan-400/20">
                  <div className="absolute inset-8 rounded-full border border-purple-400/20">
                    <div className="absolute inset-8 rounded-full border border-emerald-400/30"></div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative max-w-4xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-emerald-900/20 via-cyan-900/20 to-purple-900/20 border border-emerald-500/20 backdrop-blur-sm">
              <h3 className="text-4xl font-light mb-6 text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Our Sacred Commitment
                </span>
              </h3>
              <p className="text-xl text-gray-200 leading-relaxed font-light mb-6">
                In an age of institutional failure, we choose to be
                institutional builders. We create the change we wish to see—not
                through revolution, but through
                <span className="font-medium text-white">
                  {" "}
                  quiet, persistent, sacred practice
                </span>
                .
              </p>
              <p className="text-lg text-emerald-100 font-light">
                This is how trust is rebuilt. This is how culture heals. One
                ethical choice at a time.
              </p>
            </div>
          </motion.div>

          {/* Educational Mission Section */}
          <motion.div
            className="mt-32 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.div
                className="inline-block mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-medium tracking-widest text-blue-400 uppercase bg-blue-500/10 px-6 py-3 rounded-full border border-blue-500/20 backdrop-blur-sm">
                  🧠 Ethical AI Academy
                </span>
              </motion.div>

              <h3 className="text-3xl sm:text-5xl font-light mb-6 text-white leading-tight">
                We Don't Just Practice
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium">
                  We Teach
                </span>
              </h3>

              <p className="text-xl text-gray-200 max-w-4xl mx-auto font-light leading-relaxed">
                Knowledge is power—but shared knowledge is transformation. We're
                building the educational foundation for an ethical AI future,
                one workshop, tool, and conversation at a time.
              </p>
            </div>

            {/* Educational Offerings Grid - First 3 */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: "🎓",
                  title: "Ethical AI Workshops",
                  subtitle: "Hands-On Learning",
                  description:
                    "Interactive seminars teaching responsible AI implementation that enhances human creativity without replacing it.",
                  features: [
                    "Live coding sessions",
                    "Case study breakdowns",
                    "Ethical framework development",
                    "Q&A with industry experts",
                  ],
                  color: "from-blue-500 to-indigo-600",
                  bgColor: "from-blue-950/30 to-indigo-950/30",
                  borderColor: "border-blue-500/20",
                },
                {
                  icon: "🛠️",
                  title: "AI Ethics Toolkit",
                  subtitle: "Practical Resources",
                  description:
                    "Comprehensive guides, checklists, and frameworks for implementing AI solutions that respect human dignity.",
                  features: [
                    "Implementation checklists",
                    "ROI calculators",
                    "Ethics assessment tools",
                    "Best practice templates",
                  ],
                  color: "from-emerald-500 to-teal-600",
                  bgColor: "from-emerald-950/30 to-teal-950/30",
                  borderColor: "border-emerald-500/20",
                },
                {
                  icon: "📚",
                  title: "Automation Academy",
                  subtitle: "Strategic Education",
                  description:
                    "Courses on building efficient workflows that scale your impact while maintaining authentic human connection.",
                  features: [
                    "Strategy masterclasses",
                    "Workflow optimization",
                    "Human-AI collaboration",
                    "Profit with purpose methods",
                  ],
                  color: "from-purple-500 to-pink-600",
                  bgColor: "from-purple-950/30 to-pink-950/30",
                  borderColor: "border-purple-500/20",
                },
              ].map((offering, index) => (
                <div
                  key={`first-${index}`}
                  className={`relative group rounded-2xl overflow-hidden bg-gradient-to-br ${offering.bgColor} backdrop-blur-sm border ${offering.borderColor} p-6 hover:border-opacity-40 transition-all duration-300`}
                >
                  {/* Subtle Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${offering.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon & Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${offering.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}
                      >
                        {offering.icon}
                      </div>
                      <div>
                        <div
                          className={`text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r ${offering.color} uppercase tracking-widest mb-1`}
                        >
                          {offering.subtitle}
                        </div>
                        <h4 className="text-xl font-medium text-white leading-tight">
                          {offering.title}
                        </h4>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6 font-light">
                      {offering.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {offering.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${offering.color} flex-shrink-0`}
                          ></div>
                          <span className="text-gray-400 text-sm font-light">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Future Vision Section */}
            <div className="text-center mb-20 relative">
              {/* Subtle Background Effect */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <div className="w-96 h-96 rounded-full bg-gradient-to-br from-violet-500/30 to-cyan-500/30 blur-3xl"></div>
              </div>

              <div className="relative max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-violet-900/20 via-blue-900/20 to-cyan-900/20 border border-violet-500/20 backdrop-blur-sm">
                <div className="inline-block mb-4">
                  <span className="text-xs font-medium tracking-widest text-violet-400 uppercase bg-violet-500/10 px-4 py-2 rounded-full border border-violet-500/20">
                    🔮 Our Vision
                  </span>
                </div>

                <h4 className="text-3xl font-light mb-6 text-white leading-tight">
                  Building the
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-medium">
                    {" "}
                    Future of Work
                  </span>
                </h4>

                <p className="text-lg text-gray-200 leading-relaxed font-light mb-6">
                  We're not just teaching today's best practices—we're actively
                  building tomorrow's ethical standards. Our roadmap includes
                  industry-wide certification programs, policy advocacy, and
                  partnerships with educational institutions to ensure the next
                  generation of marketers and technologists prioritize human
                  dignity alongside innovation.
                </p>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  {[
                    "🎯 Industry Certification Standards",
                    "🏛️ Policy & Advocacy Work",
                    "🌍 Global Educational Partnerships",
                    "🔬 Ethical AI Research Initiatives",
                  ].map((goal, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-200 font-light"
                    >
                      {goal}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Advanced Programs Grid - Next 3 */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🤝",
                  title: "Client Transformation Program",
                  subtitle: "Guided Implementation",
                  description:
                    "Done-with-you programs helping businesses integrate ethical AI practices into their existing operations.",
                  features: [
                    "Personalized roadmaps",
                    "Weekly check-ins",
                    "Implementation support",
                    "Success measurement",
                  ],
                  color: "from-orange-500 to-red-600",
                  bgColor: "from-orange-950/30 to-red-950/30",
                  borderColor: "border-orange-500/20",
                },
                {
                  icon: "🌐",
                  title: "Partner Certification",
                  subtitle: "Professional Development",
                  description:
                    "Comprehensive certification program for agencies and consultants wanting to offer ethical AI services.",
                  features: [
                    "Industry certification",
                    "Ongoing education",
                    "Community access",
                    "Co-marketing opportunities",
                  ],
                  color: "from-cyan-500 to-blue-600",
                  bgColor: "from-cyan-950/30 to-blue-950/30",
                  borderColor: "border-cyan-500/20",
                },
                {
                  icon: "💡",
                  title: "Innovation Lab",
                  subtitle: "Future-Forward Thinking",
                  description:
                    "Collaborative space for exploring cutting-edge ethical AI applications and sharing breakthrough discoveries.",
                  features: [
                    "Research partnerships",
                    "Beta testing access",
                    "Innovation workshops",
                    "Thought leadership",
                  ],
                  color: "from-violet-500 to-purple-600",
                  bgColor: "from-violet-950/30 to-purple-950/30",
                  borderColor: "border-violet-500/20",
                },
              ].map((offering, index) => (
                <div
                  key={`second-${index}`}
                  className={`relative group rounded-2xl overflow-hidden bg-gradient-to-br ${offering.bgColor} backdrop-blur-sm border ${offering.borderColor} p-6 hover:border-opacity-40 transition-all duration-300`}
                >
                  {/* Subtle Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${offering.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon & Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${offering.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}
                      >
                        {offering.icon}
                      </div>
                      <div>
                        <div
                          className={`text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r ${offering.color} uppercase tracking-widest mb-1`}
                        >
                          {offering.subtitle}
                        </div>
                        <h4 className="text-xl font-medium text-white leading-tight">
                          {offering.title}
                        </h4>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6 font-light">
                      {offering.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {offering.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${offering.color} flex-shrink-0`}
                          ></div>
                          <span className="text-gray-400 text-sm font-light">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Section */}
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-pink-900/20 border border-indigo-500/20 backdrop-blur-sm">
                <h4 className="text-2xl font-light mb-4 text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                    Ready to Lead the Ethical AI Revolution?
                  </span>
                </h4>
                <p className="text-gray-200 leading-relaxed mb-6 font-light">
                  Join our community of forward-thinking businesses who believe
                  that technology should amplify human potential, not replace
                  it.
                </p>
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/25">
                  Inquire About Our Programs
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                Meet Our Team
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Experts in AI and marketing who walk the walk—not just talk it.
              Our diverse team combines neuroscience backgrounds with ethical
              tech development to create campaigns that resonate.
            </p>
          </div>
          <div className="relative mb-12">
            <div className="flex justify-center space-x-4 mb-8 z-20 relative">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTeamMember(index);
                    setShowFullBio(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTeamMember === index
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 scale-125"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`View team member ${index + 1}`}
                />
              ))}
            </div>
            <div className="max-w-6xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMember.name}
                  className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="lg:col-span-2">
                    <div className="relative rounded-2xl overflow-hidden bg-gray-900/80 backdrop-blur-md border border-gray-800 shadow-xl aspect-square">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${currentMember.accentColor} opacity-5`}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10"></div>
                      <div className="absolute -inset-0.5 bg-gradient-to-tr from-transparent via-cyan-500/20 to-purple-500/20 animate-pulse"></div>

                      {/* UPDATED MAIN IMAGE SECTION */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          {/* Background glow effects - behind everything */}
                          <div
                            className={`absolute -inset-8 rounded-full bg-gradient-to-r ${currentMember.accentColor} opacity-10 blur-2xl -z-10`}
                          ></div>
                          <div
                            className={`absolute -inset-4 rounded-full bg-gradient-to-r ${currentMember.accentColor} opacity-15 blur-xl -z-10`}
                          ></div>

                          {/* Rotating accent ring - outside the image */}
                          <div
                            className={`absolute -inset-2 rounded-full opacity-60`}
                            style={{
                              background: `conic-gradient(from 0deg, transparent, ${
                                currentMember.accentColor.includes("cyan")
                                  ? "#06b6d4"
                                  : currentMember.accentColor.includes("purple")
                                  ? "#a855f7"
                                  : "#3b82f6"
                              }, transparent)`,
                              animation: "spin 8s linear infinite",
                            }}
                          ></div>

                          {/* Main image container */}
                          <div className="w-80 h-80 rounded-full overflow-hidden relative border-2 border-white/10 shadow-xl">
                            <img
                              src={currentMember.image}
                              alt={currentMember.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = "none";
                                e.target.parentNode.querySelector(
                                  ".fallback-circle"
                                ).style.display = "flex";
                              }}
                            />

                            {/* Fallback gradient circle */}
                            <div
                              className={`fallback-circle w-full h-full bg-gradient-to-br ${currentMember.accentColor} flex items-center justify-center absolute inset-0 z-30`}
                              style={{ display: "none" }}
                            >
                              <span className="text-white text-6xl font-bold">
                                {currentMember.name.charAt(0)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3 space-y-6">
                    <div>
                      <h3
                        className={`text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${currentMember.accentColor}`}
                      >
                        {currentMember.name}
                      </h3>
                      <p className="text-xl text-gray-300 mb-4">
                        {currentMember.role}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentMember.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${currentMember.accentColor} bg-opacity-10 text-white border border-gray-700`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <div className="text-gray-300 leading-relaxed">
                        {showFullBio ? (
                          <p>{currentMember.fullBio}</p>
                        ) : (
                          <p>{currentMember.bio}</p>
                        )}
                      </div>
                      <button
                        onClick={() => setShowFullBio(!showFullBio)}
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      >
                        {showFullBio ? "Read less" : "Read more"}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 transform transition-transform duration-300 ${
                            showFullBio ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex space-x-4">
                      {Object.entries(currentMember.socialLinks).map(
                        ([platform, url]) => (
                          <a
                            key={platform}
                            href={url}
                            className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800/50"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="sr-only">{platform}</span>
                            {platform === "twitter" ? (
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            ) : (
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                              </svg>
                            )}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Team Member Thumbnail Selector */}
        <div className="flex justify-center gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <motion.button
              key={index}
              className="relative group"
              onClick={() => {
                setActiveTeamMember(index);
                setShowFullBio(false);
              }}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all
                  ${
                    activeTeamMember === index
                      ? "border-cyan-500 shadow-lg shadow-cyan-500/20"
                      : "border-gray-700 group-hover:border-gray-500"
                  }`}
              >
                {/* UPDATED THUMBNAIL SECTION */}
                <div className="w-full h-full relative overflow-hidden">
                  {/* Background glow - behind the image */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-br ${member.accentColor} opacity-20 rounded-lg blur-sm -z-10`}
                  ></div>

                  <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />

                    {/* Fallback gradient */}
                    <div
                      className={`w-full h-full bg-gradient-to-br ${member.accentColor} flex items-center justify-center absolute inset-0 z-20`}
                      style={{ display: "none" }}
                    >
                      <span className="text-white text-xl font-bold">
                        {member.name.charAt(0)}
                      </span>
                    </div>

                    {/* Hover effect overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`}
                    ></div>
                  </div>
                </div>
              </div>
              <AnimatePresence>
                {hoveredMember === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-900 text-white text-sm py-1 px-3 rounded whitespace-nowrap z-10"
                  >
                    {member.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="/contact">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium transition-all duration-300">
              <span className="absolute inset-0 border-2 border-cyan-400 rounded-lg"></span>
              <span className="absolute inset-0 scale-0 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 transition-transform duration-500 group-hover:scale-100"></span>
              <span className="relative text-cyan-300 group-hover:text-white transition-colors duration-300 flex items-center">
                Join The Movement
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </motion.div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .shadow-glow {
          box-shadow: 0 0 15px 2px rgba(6, 182, 212, 0.5);
        }
      `}</style>
    </section>
  );
}
