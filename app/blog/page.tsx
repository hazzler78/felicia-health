import BlogCard from "../components/BlogCard";
import { getAllPosts } from "@/lib/posts";

const categories = ["Nutrition", "Training", "Lifestyle", "Product Reviews"] as const;

export default function BlogPage({ searchParams }: { searchParams: { c?: string } }) {
  const selected = searchParams?.c;
  const posts = getAllPosts().filter((p) => !selected || p.category === selected);
  return (
    <div>
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="mt-4 flex gap-2 flex-wrap">
        {categories.map((c) => (
          <a
            key={c}
            href={selected === c ? "/blog" : `/blog?c=${encodeURIComponent(c)}`}
            className={`rounded-full border px-3 py-1 text-sm ${selected === c ? "bg-[--color-accent-green] border-zinc-200" : "border-zinc-200"}`}
          >
            {c}
          </a>
        ))}
      </div>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <BlogCard
            key={p.slug}
            slug={`/blog/${p.slug}`}
            imageUrl={p.image}
            title={p.title}
            excerpt={p.excerpt}
            category={p.category}
          />
        ))}
      </div>
    </div>
  );
}


