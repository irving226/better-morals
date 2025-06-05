import { allPosts, BlogPost } from "@/lib/blogData";
import BlogPostClientView from "./BlogPostClientView";

// This function MUST be in a Server Component
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.slug === slug);
}

// This is now primarily a Server Component
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    // In a real app, you'd use notFound() from 'next/navigation'
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Post not found.
      </div>
    );
  }

  // Pass the fetched post data to the Client Component
  return <BlogPostClientView post={post} />;
}
