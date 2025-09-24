import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: "Nutrition" | "Training" | "Lifestyle" | "Product Reviews";
  affiliateLinks?: { label: string; url: string }[];
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content", "posts");

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const fm = data as PostFrontmatter;
      return { ...fm, slug, content } satisfies Post;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const fm = data as PostFrontmatter;
  return { ...fm, slug, content } satisfies Post;
}

export function getPostsByCategory(category: PostFrontmatter["category"]): Post[] {
  return getAllPosts().filter((p) => p.category === category);
}


