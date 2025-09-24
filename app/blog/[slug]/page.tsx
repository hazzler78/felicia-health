import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import AffiliateButton from "@/app/components/AffiliateButton";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export const dynamic = "force-static";

export default function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();
  const related = getAllPosts().filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  return (
    <article className="prose">
      <h1 className="font-bold text-4xl mb-2">{post.title}</h1>
      <p className="text-sm text-zinc-600">{new Date(post.date).toLocaleDateString()}</p>
      {post.image && (
        <div className="mt-6 rounded-xl overflow-hidden relative aspect-square">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
        </div>
      )}
      <div className="mt-6">{post.content.split("\n\n").map((p, i) => (<p key={i}>{p}</p>))}</div>
      {post.affiliateLinks && post.affiliateLinks.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-3">
          {post.affiliateLinks.map((l) => (
            <AffiliateButton key={l.url} href={l.url}>{l.label}</AffiliateButton>
          ))}
        </div>
      )}
      {related.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Related posts</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="card p-4 block">
                <div className="text-xs uppercase tracking-wide text-zinc-600">{r.category}</div>
                <div className="mt-1 font-semibold">{r.title}</div>
                <div className="text-sm text-zinc-700 mt-1">{r.excerpt}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}


