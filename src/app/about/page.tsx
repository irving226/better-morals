"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";

// Team members data
const teamMembers = [
  {
    name: "Clarity Skyz ",
    role: "Founder & AI Strategist",
    bio: "Clarity Skyz is the visionary behind BetterMorals—a company born from the belief that marketing doesn’t have to be manipulative to be effective, and that technology should be used to *amplify* creativity, not erase it. With a career rooted in storytelling, brand-building, and automation design, Clarity blends the imaginative with the strategic. From launching full-scale brand ecosystems to building AI systems that support artists and small businesses, their work lives at the intersection of ethics, innovation, and deep human connection. Clarity has partnered with creators, visionaries, and cultural disruptors to develop authentic messaging, automate workflows, and scale with soul. They're especially passionate about helping marginalized voices find clarity, confidence, and momentum in a world that too often tries to silence them. A lifelong student of the strange and strategic Clarity founded BetterMorals as both a business and a movement: to rewrite the rules, elevate the creative class, and build a future where doing the right thing isn’t a compromise, it’s the competitive edge.",
    skills: ["AI Ethics", "Marketing Strategy", "Neuroscience"],
    image: "/team/alex.jpg", // Replace with actual image path
    socialLinks: {
      twitter: "https://twitter.com/alexmorgan",
      linkedin: "https://linkedin.com/in/alexmorgan",
    },
    accentColor: "from-cyan-400 to-teal-500",
  },
  {
    name: "Elizabeth So",
    role: "Creative Director",
    bio: "With a decade-long career as a Doctor of East Asian Medicine and an academic foundation in deconstructive sociology, Liz brings a rare synthesis of intuition, critical thinking, and artistic vision to BetterMorals. Her creative work is informed by a deep understanding of global systems and the subtle forces that shape human behavior—making her a natural fit for a company committed to intentional, ethical marketing. She joined BetterMorals during a self-directed sabbatical, seeking new ways to respond to a rapidly shifting technological and cultural landscape. Rather than retreating from change, Liz chose to channel her skills into creative direction that empowers small businesses and soulful entrepreneurs to tell their stories with clarity, depth, and integrity. Her approach is both justice oriented and deeply strategic and grounded in the belief that marketing can be used to redistribute resources, amplify marginalized voices, and challenge dominant narratives. As a lifelong student of collective wisdom, Liz sees this work as part of a broader project: helping shift global awareness and rebalance power during a time of massive change.",
    skills: ["Visual Design", "Narrative Strategy", "Brand Development"],
    image: "/team/jordan.jpg", // Replace with actual image path
    socialLinks: {
      twitter: "https://twitter.com/jordanrivers",
      linkedin: "https://linkedin.com/in/jordanrivers",
    },
    accentColor: "from-purple-400 to-fuchsia-500",
  },
  {
    name: "Brian Irving",
    role: "Tech Lead",
    bio: "Brian serves a pivitol role at Better Morals thanks to his experience spanning elite tech and military environments, blending technical depth with a people-first mindset. His early years as a U.S. Army paratrooper shaped a bias for action and adaptability—skills he carried into roles building scalable AI and automation systems at AWS and beyond. At BetterMorals, Brian focuses on ethical, human-centered tech that amplifies creativity rather than replaces it. From streamlining backend workflows to crafting intuitive AI tools, he helps creators, ethical brands, and mission-driven teams grow without compromising their values.A lifelong musician and active supporter of creative communities, Brian bridges engineering with culture—making tech that resonates just as much as it runs. Whether he’s building infrastructure or supporting artists, his goal stays the same: use technology to scale impact and deepen connection.",
    skills: ["Systems Architecture", "AI Implementation", "Automation"],
    image: "/team/taylor.jpg", // Replace with actual image path
    socialLinks: {
      twitter: "https://twitter.com/taylorzhang",
      linkedin: "https://linkedin.com/in/taylorzhang",
    },
    accentColor: "from-blue-400 to-indigo-500",
  },
];

// About section content
const aboutContent = [
  {
    title: "Our History",
    desc: "BetterMorals began with a simple but rebellious idea: that marketing could be a force for good. Born out of late-night brainstorms between artists and strategists who were tired of soulless sales tactics and extractive business models. What started as a solo venture helping indie creators quickly grew into a full-service agency working with everyone from underground collectives to high-profile visionaries. With each client, our mission stayed the same: use AI and automation not to replace people—but to empower them.",
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
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Auto-rotate team members every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTeamMember((prev) => (prev + 1) % teamMembers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Icons for about content
  const renderIcon = (iconName) => {
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
      case "team":
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
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative overflow-hidden py-24 bg-gray-950 text-white">
      {/* Dynamic Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        {/* Modern glass morphism orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full opacity-20 bg-gradient-to-br from-cyan-500/30 to-transparent blur-[80px]"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full opacity-15 bg-gradient-to-br from-purple-500/30 to-transparent blur-[80px]"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full opacity-10 bg-gradient-to-br from-blue-500/30 to-transparent blur-[80px]"></div>

        {/* Animated digital grid */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="h-full w-full grid grid-cols-12 grid-rows-12">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-cyan-500/10" />
            ))}
          </div>
        </div>

        {/* Abstract flowing lines */}
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

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-400 mx-auto my-8 rounded-full shadow-glow"></div>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ethical AI-powered campaigns that drive impact—without compromising
            your values. Explore our vision below.
          </p>
        </motion.div>

        {/* About Section - 2025 Style Interactive Cards */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-teal-500">
                Our Vision
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              At BetterMorals, we're building a future where marketing amplifies
              humanity rather than manipulating it.
            </p>
          </div>

          {/* Interactive Timeline Cards */}
          <div className="relative">
            {/* Connect line between cards */}
            <div className="absolute left-1/2 top-8 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/70 via-purple-500/50 to-transparent -translate-x-1/2 hidden md:block"></div>

            {aboutContent.map((content, index) => (
              <motion.div
                key={index}
                className="relative mb-16 last:mb-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                {/* Connector orb */}
                <motion.div
                  className={`absolute left-1/2 top-8 w-6 h-6 rounded-full bg-gradient-to-r ${content.color} -translate-x-1/2 hidden md:flex items-center justify-center shadow-lg shadow-cyan-500/20 z-10`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    duration: 0.5,
                    delay: 0.5 + index * 0.3,
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </motion.div>

                {/* Content card with modern layout */}
                <div
                  className={`relative max-w-4xl mx-auto ${
                    index % 2 === 0
                      ? "md:ml-auto md:mr-8"
                      : "md:mr-auto md:ml-8"
                  } md:w-5/12`}
                >
                  <motion.div
                    className="relative rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-500"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm z-0"></div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${content.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 z-0`}
                    ></div>

                    {/* Animated borders */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <motion.div
                        className="absolute inset-x-0 h-[2px] top-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          repeatDelay: 1,
                        }}
                      />
                      <motion.div
                        className="absolute inset-y-0 w-[2px] right-0 bg-gradient-to-b from-transparent via-purple-400 to-transparent"
                        initial={{ y: "-100%" }}
                        animate={{ y: "100%" }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 0.75,
                          repeatDelay: 1,
                        }}
                      />
                      <motion.div
                        className="absolute inset-x-0 h-[2px] bottom-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                        initial={{ x: "100%" }}
                        animate={{ x: "-100%" }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 1.5,
                          repeatDelay: 1,
                        }}
                      />
                      <motion.div
                        className="absolute inset-y-0 w-[2px] left-0 bg-gradient-to-b from-transparent via-purple-400 to-transparent"
                        initial={{ y: "100%" }}
                        animate={{ y: "-100%" }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 2.25,
                          repeatDelay: 1,
                        }}
                      />
                    </div>

                    {/* Card content */}
                    <div className="relative z-10 p-8">
                      {/* Title with icon */}
                      <div className="flex items-center mb-6 gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${content.color} shadow-lg shadow-cyan-500/20 transform -rotate-3`}
                        >
                          {renderIcon(content.icon)}
                        </div>
                        <h3
                          className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${content.color}`}
                        >
                          {content.title}
                        </h3>
                      </div>

                      {/* Description with enhanced typography */}
                      <div className="space-y-4">
                        {content.desc.split(". ").map(
                          (sentence, i) =>
                            sentence && (
                              <p
                                key={i}
                                className="text-gray-300 leading-relaxed"
                              >
                                {sentence.trim()}.
                              </p>
                            )
                        )}
                      </div>

                      {/* Interactive button that reveals on hover */}
                      <motion.div
                        className="mt-8 overflow-hidden h-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.2 }}
                      >
                        <div className="group cursor-pointer inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                          <span className="font-medium">Learn more</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
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
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section - 2025 Style with 3D Cards */}
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

          {/* Immersive Team Showcase - 3D Card Carousel */}
          <div className="relative h-[600px] mb-12">
            {/* Interactive dots navigation */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTeamMember(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTeamMember === index
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 scale-125"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`View team member ${index + 1}`}
                />
              ))}
            </div>

            {/* 3D Card Showcase */}
            <div className="relative w-full h-full max-w-5xl mx-auto">
              <AnimatePresence mode="wait">
                {teamMembers.map(
                  (member, index) =>
                    index === activeTeamMember && (
                      <motion.div
                        key={member.name}
                        className="absolute inset-0 flex flex-col md:flex-row items-center justify-center"
                        initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                        transition={{
                          type: "spring",
                          stiffness: 50,
                          damping: 20,
                        }}
                      >
                        {/* Team Member Card */}
                        <div className="relative w-full md:w-2/3 h-[500px] rounded-2xl overflow-hidden bg-gray-900/80 backdrop-blur-md border border-gray-800 shadow-xl">
                          {/* Glass morphism effect */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${member.accentColor} opacity-5`}
                          ></div>

                          {/* Card content using modern grid layout */}
                          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                            {/* Image side with holographic overlay */}
                            <div className="relative h-[250px] md:h-full overflow-hidden bg-gray-950">
                              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10"></div>
                              <div
                                className="absolute inset-0 opacity-30 mix-blend-overlay"
                                style={{
                                  backgroundImage: "url(/holographic-grid.png)",
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                }}
                              ></div>
                              <div className="absolute -inset-0.5 bg-gradient-to-tr from-transparent via-cyan-500/20 to-purple-500/20 animate-pulse"></div>

                              {/* Replace with actual image */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                  className={`w-64 h-64 rounded-full bg-gradient-to-br ${member.accentColor} flex items-center justify-center`}
                                >
                                  <span className="text-white text-6xl font-bold">
                                    {member.name.charAt(0)}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Content side */}
                            <div className="p-8 flex flex-col justify-between">
                              <div>
                                <h3
                                  className={`text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r ${member.accentColor}`}
                                >
                                  {member.name}
                                </h3>
                                <p className="text-lg text-gray-300 mb-6">
                                  {member.role}
                                </p>
                                <p className="text-gray-400 mb-6">
                                  {member.bio}
                                </p>

                                {/* Skills tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                  {member.skills.map((skill, i) => (
                                    <span
                                      key={i}
                                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${member.accentColor} bg-opacity-10 text-white border border-gray-700`}
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Social media links */}
                              <div className="flex space-x-4">
                                {Object.entries(member.socialLinks).map(
                                  ([platform, url]) => (
                                    <a
                                      key={platform}
                                      href={url}
                                      className="text-gray-400 hover:text-white transition-colors"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <span className="sr-only">
                                        {platform}
                                      </span>
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
                          </div>
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Team Member Thumbnail Selector */}
        <div className="flex justify-center gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <motion.button
              key={index}
              className={`relative group`}
              onClick={() => setActiveTeamMember(index)}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all
                  ${
                    activeTeamMember === index
                      ? `border-cyan-500 shadow-lg shadow-cyan-500/20`
                      : `border-gray-700 group-hover:border-gray-500`
                  }`}
              >
                {/* Placeholder for team member image - replace with actual image */}
                <div
                  className={`w-full h-full bg-gradient-to-br ${member.accentColor} flex items-center justify-center`}
                >
                  <span className="text-white text-xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Name tooltip on hover */}
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
        </motion.div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes float-particle {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(
              ${Math.random() * 100 - 50}px,
              ${Math.random() * 100 - 50}px
            );
          }
          50% {
            transform: translate(
              ${Math.random() * 100 - 50}px,
              ${Math.random() * 100 - 50}px
            );
          }
          75% {
            transform: translate(
              ${Math.random() * 100 - 50}px,
              ${Math.random() * 100 - 50}px
            );
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .shadow-glow {
          box-shadow: 0 0 15px 2px rgba(6, 182, 212, 0.5);
        }
      `}</style>
    </section>
  );
}
