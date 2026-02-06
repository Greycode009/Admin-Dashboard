import SectionHeading from "../components/SectionHeading";

const highlights = [
  {
    title: "Student clubs",
    description: "70+ clubs including robotics, debate, and eco-innovation.",
  },
  {
    title: "Athletics",
    description: "Fitness studios, team sports, and adaptive athletics programs.",
  },
  {
    title: "Wellness",
    description: "Counseling, meditation rooms, and wellness check-ins.",
  },
];

const CampusLife = () => {
  return (
    <div className="space-y-20 px-6 pb-24">
      <section className="mx-auto w-full max-w-6xl space-y-8">
        <SectionHeading
          kicker="Campus life"
          title="A calm, creative campus community"
          subtitle="Aurora keeps things simple: welcoming spaces, great food, and real support for every student."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Residential life</h3>
            <p className="text-sm text-[color:var(--muted)]">
              Living-learning communities include quiet study lounges, shared kitchens,
              and weekend events planned by resident advisors.
            </p>
            <ul className="space-y-2 text-sm text-[color:var(--muted)]">
              <li>• Weekly community dinners</li>
              <li>• 24/7 campus support</li>
              <li>• Green spaces for outdoor study</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"
            alt="Campus green space"
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
