import SectionHeading from "../components/SectionHeading";

const values = [
  {
    title: "Purposeful Innovation",
    description:
      "We teach students to design with empathy, building solutions that serve real communities.",
  },
  {
    title: "Global Citizenship",
    description:
      "Every learner completes an international collaboration project before graduation.",
  },
  {
    title: "Whole-Person Growth",
    description:
      "Mind, body, and spirit flourish through wellness coaching and creative exploration.",
  },
];

const About = () => {
  return (
    <div className="space-y-20 px-6 pb-24">
      <section className="mx-auto w-full max-w-6xl space-y-10">
        <SectionHeading
          kicker="Our story"
          title="A modern academy built on bold imagination"
          subtitle="Aurora Academy began as a design sprint between educators, technologists, and artists. Today, we serve 1,800 learners across a vibrant, carbon-neutral campus."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{value.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/90 p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Our campus</p>
            <h2 className="text-3xl font-semibold text-white">Designed for discovery</h2>
            <p className="text-sm leading-relaxed text-slate-300">
              12 innovation labs, a biophilic library, wellness atriums, and student-run
              cafes come together to create a campus that feels like a living studio.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-200">
              {[
                "Skybridge Library",
                "Eco Roof Gardens",
                "Robotics Hangar",
                "Creative Media Wing",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {[
              {
                title: "Student Success Studio",
                description:
                  "Personal coaches track progress and create wellbeing journeys for every learner.",
              },
              {
                title: "Innovation Pipeline",
                description:
                  "Partnerships with 120+ organizations provide internships and real-world projects.",
              },
              {
                title: "Leadership Collective",
                description:
                  "Students lead with empathy through governance councils and service residencies.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
