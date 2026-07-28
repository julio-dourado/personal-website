import { getAllPosts } from "@/lib/mdx";
import { BlogPreviewClient } from "./BlogPreviewClient";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);
  return <BlogPreviewClient posts={posts} />;
}
