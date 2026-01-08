import SectionHeading from "../components/SectionHeading";

const programs = [
  {
    title: "Global Leadership",
    description: "Policy, languages, and community impact studios.",
  },
  {
    title: "Creative Technology",
    description: "Design, coding, and storytelling labs.",
  },
  {
    title: "Health Sciences",
    description: "Biology, wellness, and research clinics.",
  },
  {
    title: "Performing Arts",
    description: "Dance, music, and theater conservatory pathways.",
  },
];

const Academics = () => {
  return (
    <div className="space-y-20 px-6 pb-24">
      <section className="mx-auto w-full max-w-6xl space-y-8">
        <SectionHeading
          kicker="Academics"
          title="Clear pathways with flexible schedules"
          subtitle="Students combine seminars, studio intensives, and independent research to shape a week that fits their goals."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <h3 className="text-lg font-semibold">{program.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                {program.description}
              </p>
              <button className="mt-4 text-sm font-semibold text-[color:var(--accent)]">
                View pathway →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Signature learning experiences</h3>
            <p className="text-sm text-[color:var(--muted)]">
              Studio weeks, global collaborations, and industry internships give
              students a clear roadmap from day one.
            </p>
            <ul className="space-y-2 text-sm text-[color:var(--muted)]">
              <li>• Portfolio feedback sessions every semester</li>
              <li>• Personalized learning map with faculty coaches</li>
              <li>• Community impact projects with local partners</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
            alt="Students in a classroom"
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Academics;
