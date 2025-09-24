import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">About Felicia</h1>
        <p className="text-zinc-700">I&apos;m Felicia. After years of start-and-stop dieting, I found a better way: small, sustainable habits that build strength and confidence. Now I share simple recipes, realistic workouts, and mindset tools for women in their 30s.</p>
        <p className="text-zinc-700">My mission is to help you feel strong, energetic, and calm in your body without obsessing over perfection.</p>
      </div>
      <div className="card overflow-hidden relative aspect-[4/5]">
        <Image src="/images/featured-1.png" alt="Felicia portrait" fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" unoptimized />
      </div>
    </div>
  );
}


