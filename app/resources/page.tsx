import AffiliateButton from "@/app/components/AffiliateButton";

const resources = [
  {
    title: "Protein Powders",
    items: [
      { label: "Whey Isolate - Vanilla", url: "https://example.com/aff/whey" },
      { label: "Plant Protein - Chocolate", url: "https://example.com/aff/plant" },
    ],
  },
  {
    title: "Kitchen Tools",
    items: [
      { label: "Personal Blender", url: "https://example.com/aff/blender" },
      { label: "Meal Prep Containers", url: "https://example.com/aff/containers" },
    ],
  },
  {
    title: "Fitness Gear",
    items: [
      { label: "Yoga Mat", url: "https://example.com/aff/yoga-mat" },
      { label: "Mini Bands", url: "https://example.com/aff/bands" },
    ],
  },
  {
    title: "Apps",
    items: [
      { label: "Habit Tracker", url: "https://example.com/aff/habits" },
      { label: "Macro Tracker", url: "https://example.com/aff/macros" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Resources</h1>
      <p className="text-zinc-700 mt-2">Products and tools I personally recommend. Some links are affiliate links.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {resources.map((section) => (
          <div key={section.title} className="card p-6">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {section.items.map((i) => (
                <AffiliateButton key={i.url} href={i.url}>{i.label}</AffiliateButton>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


