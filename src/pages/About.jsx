import SectionHeading from "../components/SectionHeading";

const values = [
  {
    title: "Curiosity first",
    description:
      "We encourage students to ask bold questions and explore ideas through projects.",
  },
  {
    title: "Inclusive community",
    description:
      "Small cohorts and shared studios help students build lasting friendships.",
  },
  {
    title: "Real-world impact",
    description:
      "Every learner completes a community or industry capstone before graduation.",
  },
];

const About = () => {
  return (
    <div className="space-y-20 px-6 pb-24">
      <section className="mx-auto w-full max-w-6xl space-y-8">
        <SectionHeading
          kicker="Our story"
          title="A simple idea: let students build what they imagine"
          subtitle="Aurora Academy started as a small studio school. Today, we serve 1,800 learners across a calm, green campus in Arcadia."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
              >
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
            alt="Students walking through a modern campus"
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 rounded-[32px] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">Campus at a glance</h2>
            <p className="text-sm leading-relaxed text-[color:var(--muted)]">
              Our biophilic campus blends study spaces with greenery, quiet zones, and
              collaborative studios that keep learners focused.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-[color:var(--muted)]">
              {[
                "Skybridge library",
                "Makers hall",
                "Performing arts wing",
                "Wellness studio",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[color:var(--border)] px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
            alt="Library study space"
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
