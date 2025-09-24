import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  slug: string;
  imageUrl: string;
  title: string;
  excerpt: string;
  category: string;
};

export default function BlogCard({ slug, imageUrl, title, excerpt, category }: BlogCardProps) {
  return (
    <article className="card overflow-hidden">
      <Link href={slug} className="block">
        <div className="aspect-square w-full bg-zinc-100 relative">
          <Image src={imageUrl} alt={title} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" unoptimized />
        </div>
        <div className="p-5">
          <div className="text-xs uppercase tracking-wide text-zinc-600">{category}</div>
          <h3 className="mt-2 text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-zinc-700">{excerpt}</p>
          <div className="mt-4 inline-flex items-center text-pink-700 font-medium">Read more →</div>
        </div>
      </Link>
    </article>
  );
}


