"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL;

  // Update mouse position for glow effect
  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubscribe = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!email) return;

    try {
      const res = await fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: "footer",
        }),
      });

      if (!res.ok) throw new Error("Subscription failed");

      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    } catch (err) {
      console.error("Error subscribing:", err);
    }
  };

  // Footer sections with links - structured for easy post-launch additions
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about#team" },
        { name: "Contact", href: "/contact" },
        // Reserved for future additions
        // { name: "Careers", href: "/careers" },
      ],
    },
    // Reserved sections for post-launch additions

    // {
    //   title: "Services",
    //   links: [
    //     { name: "AI Automation Systems", href: "/services#ai-automation" },
    //     { name: "Marketing Strategy", href: "/services#marketing-strategy" },
    //     { name: "Content Creation", href: "/services#content-creation" },
    //     { name: "Brand Development", href: "/services#brand-development" },
    //   ],
    // },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "/case-studies" },
        { name: "Blog", href: "/blog" },
        // { name: "Ethics in A.I Transparency", href: "/transparency" },
        // { name: "Knowledge Base", href: "/knowledge-base" },
        { name: "FAQs", href: "/faqs" },
      ],
    },
  ];

  // Social media links - ready to uncomment post-launch
  // const socialLinks = [
  /* 
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    */
  // ];

  return (
    <footer className="relative overflow-hidden bg-gray-950 border-t border-cyan-500/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing orbs */}
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10"
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent 70%)",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full opacity-5"
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%)",
          }}
        />

        {/* Subtle grid background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="h-full w-full grid grid-cols-12 grid-rows-12">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-cyan-500/10" />
            ))}
          </div>
        </div>

        {/* Digital flowing lines */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`h-line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
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
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Top section with logo and newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 pb-10 border-b border-gray-800">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-100 mr-1">
                  Better
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                  Morals
                </span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              We co-create systems and stories with people who want to build a
              better world. Our approach is grounded in compassion, driven by
              data, and powered by AI that amplifies humanity—not replaces it.
            </p>

            {/* Social links section - ready to enable post-launch */}
            {/* {socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors relative group"
                    aria-label={item.name}
                  >
                    <span className="absolute -inset-2 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                    <span className="relative">{item.icon}</span>
                  </a>
                ))}
              </div>
            )} */}
          </div>

          {/* Newsletter subscription */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            <h3 className="text-lg font-semibold text-white mb-4">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest insights on ethical AI, sustainable
              marketing, and building systems that scale.
            </p>

            <form onSubmit={handleSubscribe} className="w-full sm:max-w-md">
              <div className="relative">
                {/* Input field with neon glow on focus */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-gray-900/70 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-300 pr-24"
                  required
                />

                {/* Submit button */}
                <motion.button
                  type="submit"
                  className="absolute right-1 top-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm font-medium rounded-md hover:from-cyan-400 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>

              {/* Success message */}
              {subscribed && (
                <motion.p
                  className="mt-2 text-cyan-400 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Thank you for subscribing! ✓
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Middle section with links - horizontal layout for Company section */}
        {footerSections.length > 0 && (
          <div className="py-10 border-b border-gray-800">
            <div className="flex flex-col space-y-6">
              {footerSections.map((section) => (
                <div
                  key={section.title}
                  className="flex flex-col sm:flex-row sm:items-center"
                >
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-400 text-base font-semibold mb-3 sm:mb-0 sm:mr-8">
                    {section.title}
                  </h3>
                  <ul className="flex flex-wrap gap-x-8 gap-y-3">
                    {section.links
                      .filter((link) => link.name) // Only show links with names
                      .map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-gray-400 hover:text-white transition-colors relative group flex items-center"
                          >
                            <span className="absolute h-0.5 w-0 bg-gradient-to-r from-cyan-500 to-transparent bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
                            <span className="relative">{link.name}</span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom section with copyright and legal links */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} BetterMorals. All rights reserved.
          </p>

          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/legal/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-500 hover:text-cyan-400 text-sm transition-colors"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Futuristic glow effect that follows cursor */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 md:opacity-20"
        style={{
          background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 80%)`,
        }}
      />
    </footer>
  );
}
