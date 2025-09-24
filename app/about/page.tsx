import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">About Felicia</h1>
        <p className="text-zinc-700">Hi, I&apos;m Felicia. I&apos;m 28, and this is where I share the simple things that helped me feel better—easy meals, short workouts, and small wins that actually stick.</p>
        <p className="text-zinc-700">I was overweight and realized I could change that with the right mix of food, training, and mindset. Not overnight—just one habit at a time. That&apos;s what I teach here.</p>
        <p className="text-zinc-700">If you&apos;re juggling work, family, and life, I&apos;m with you. My aim is to make health feel doable and kind: habits that fit your week, not the other way around. Strong, calm, and confident is the vibe.</p>
      </div>
      <div className="card overflow-hidden relative aspect-[4/5]">
        <Image src="/images/featured-1.png" alt="Felicia portrait" fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" unoptimized />
      </div>
    </div>
  );
}


