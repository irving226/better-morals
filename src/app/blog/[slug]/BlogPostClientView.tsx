// src/app/blog/[slug]/BlogPostClientView.tsx
"use client"; // This makes it a Client Component

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react"; // If you need client-side effects
import { BlogPost } from "@/lib/blogData"; // Adjust path for your BlogPost type

interface BlogPostClientViewProps {
  post: BlogPost;
}

export default function BlogPostClientView({ post }: BlogPostClientViewProps) {
  // useEffect for client-side actions, e.g., scroll to top if needed for specific animations
  useEffect(() => {
    window.scrollTo(0, 0); // Example: scroll to top on component mount
  }, []);

  return (
    <div className="relative bg-gray-950 min-h-screen">
      {/* Optional: Consistent background effects */}
      <div className="fixed inset-0 z-0 opacity-50">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-10 bg-gradient-to-br from-cyan-500/30 to-transparent blur-[80px]"></div>
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 rounded-full opacity-15 bg-gradient-to-br from-purple-500/30 to-transparent blur-[80px]"></div>
      </div>

      <motion.div
        key={post.slug} // Animate on slug change
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative z-10 max-w-4xl mx-auto px-4 py-16 lg:py-24 text-white"
      >
        <Link
          href="/blog"
          className="fixed top-6 left-6 z-50 flex items-center gap-2 text-gray-300 hover:text-white bg-gray-900/70 backdrop-blur-md border border-gray-700/50 px-4 py-2 rounded-lg transition-colors hover:border-cyan-500/50"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          Back to Blog
        </Link>

        <article className="bg-gray-900/70 backdrop-blur-lg border border-gray-700/50 p-8 md:p-12 rounded-2xl shadow-2xl">
          <header className="mb-8 border-b border-gray-700/50 pb-8">
            <div className="flex items-center gap-4 mb-4">
              <span
                className={`text-5xl p-3 rounded-lg bg-gradient-to-br ${post.color} shadow-md`}
              >
                {post.icon}
              </span>
              <div>
                <p
                  className={`text-base font-medium tracking-widest text-cyan-400 uppercase`}
                >
                  {post.category}
                </p>
                <p className="text-sm text-gray-400">{post.impactType}</p>
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-gray-400">
              <span>
                By: <span className="text-gray-200">{post.author}</span>
              </span>
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>{post.readTime} min read</span>
              <span className="flex items-center gap-1">
                Impact:{" "}
                <strong className="text-emerald-400">{post.impactScore}</strong>
              </span>
            </div>
          </header>

          {post.image && (
            <div className="my-8 rounded-xl overflow-hidden shadow-lg border border-gray-700/50">
              {/* Replace with <Image /> from next/image for optimization */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover aspect-[16/9]"
              />
            </div>
          )}

          <div className="prose prose-invert prose-xl max-w-none text-gray-200 leading-relaxed selection:bg-cyan-500 selection:text-gray-900">
            {post.content && typeof post.content === "string" ? (
              post.content
                .split("\n")
                .map(
                  (paragraph, index) =>
                    paragraph.trim() !== "" && <p key={index}>{paragraph}</p>
                )
            ) : (
              <p>{post.content || "Content not available."}</p>
            )}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-700/50">
              <h3 className="text-xl font-semibold mb-4 text-gray-100">
                Related Tags:
              </h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm bg-gray-800/70 text-cyan-300 rounded-full border border-gray-700/50 shadow-sm hover:bg-gray-700/70 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </motion.div>
      {/* If you have page-specific <style jsx global>, it should go here or be handled via global CSS */}
    </div>
  );
}
