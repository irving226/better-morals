import { allPosts } from "@/lib/blogData";
import BlogPostClientView from "./BlogPostClientView";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Not found</div>;
  }

  return <BlogPostClientView post={post} />;
}
