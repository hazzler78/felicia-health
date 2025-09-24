import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./components/NewsletterForm";
import BlogCard from "./components/BlogCard";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Simple, sustainable health for strong women</h1>
          <p className="mt-4 text-lg text-zinc-700">I&apos;m Felicia. I help women in their 30s build realistic nutrition and training habits that actually fit life.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/blog" className="rounded-xl bg-[--color-accent-green] px-5 py-2.5 font-semibold text-zinc-900">Read the blog</Link>
            <Link href="/resources" className="rounded-xl border border-zinc-200 px-5 py-2.5 font-semibold">My resources</Link>
          </div>
        </div>
        <div className="card p-0 overflow-hidden relative aspect-[16/10]">
          <Image src="/images/hero.png" alt="Healthy lifestyle" fill className="object-cover" priority sizes="(min-width: 768px) 50vw, 100vw" unoptimized />
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold">Featured articles</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <BlogCard
            slug="/blog/protein-snacks-under-5-minutes"
            imageUrl="/images/featured-1.png"
            title="3 Protein Snacks That Take Less Than 5 Minutes"
            excerpt="Quick, satisfying bites to hit your protein goals on busy days."
            category="Nutrition"
          />
          <BlogCard
            slug="/blog/10-minute-home-workout"
            imageUrl="/images/featured-2.png"
            title="10-Minute Home Workout for Busy Days"
            excerpt="No equipment, full-body circuit to get your energy up fast."
            category="Training"
          />
          <BlogCard
            slug="/blog/my-journey-to-strong-at-30"
            imageUrl="/images/featured-3.png"
            title="My Journey: From Overweight to Feeling Strong at 30"
            excerpt="How I found simple routines that actually stuck."
            category="Lifestyle"
          />
        </div>
      </section>

      <section>
        <NewsletterForm />
      </section>
    </div>
  );
}
