// src/lib/blogData.ts (or any other appropriate path)

export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: number;
    category: string;
    impactType: string;
    impactScore: number;
    discussionHeat: number;
    tags: string[];
    image?: string; // Optional image
    content: string;
    size: "large" | "medium" | "small";
    color: string;
    icon: string;
  }
  
  export const allPosts: BlogPost[] = [
    {
      id: 1,
      title: "The True Cost of Surveillance Marketing: Why We're Walking Away from $2M in Revenue",
      slug: "the-true-cost-of-surveillance-marketing", 
      excerpt: "Last month, we turned down a lucrative contract...",
      author: "Clarity Skyz", date: "2025-06-01", readTime: 8, category: "Ethics in Practice", impactType: "Privacy Protection", impactScore: 9.2, discussionHeat: 87, tags: ["Privacy", "Revenue Ethics", "Industry Change"], image: "/blog/surveillance-cost.jpg", 
      content: "Full blog post content for 'The True Cost of Surveillance Marketing' would go here...", 
      size: "large", color: "from-red-500 to-orange-500", icon: "🛡️",
    },
    // ... other posts
  ];